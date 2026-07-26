import fs from "fs";
import path from "path";
import { ALL_PRODUCTS, Product } from "../src/data/products";

// Config
const PRODUCTS_DIR = path.join(process.cwd(), "public", "products");
const PRODUCTS_FILE_PATH = path.join(process.cwd(), "src", "data", "products.ts");

// Ensure products directory exists
if (!fs.existsSync(PRODUCTS_DIR)) {
  fs.mkdirSync(PRODUCTS_DIR, { recursive: true });
}

// Slugify string for file names
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

// Generate tags for Lorem Flickr based on category and name keywords
function getSearchTags(product: Product): string {
  const nameLower = product.name.toLowerCase();
  
  if (nameLower.includes("lipstick") || nameLower.includes("lip")) {
    return "lipstick,makeup";
  }
  if (nameLower.includes("eyeliner") || nameLower.includes("kajal") || nameLower.includes("mascara")) {
    return "mascara,eyeliner";
  }
  if (nameLower.includes("foundation") || nameLower.includes("concealer") || nameLower.includes("powder")) {
    return "foundation,makeup";
  }
  if (nameLower.includes("cleanser") || nameLower.includes("wash")) {
    return "facialcleanser,facecream";
  }
  if (nameLower.includes("serum") || nameLower.includes("moisturizer") || nameLower.includes("cream")) {
    return "skincare,facecream";
  }
  if (nameLower.includes("soap") || nameLower.includes("lotion") || nameLower.includes("mist")) {
    return "bodylotion,soap";
  }
  if (nameLower.includes("shampoo") || nameLower.includes("hair")) {
    return "shampoo,haircare";
  }
  
  // Fallbacks based on category
  const category = (product.category || "").toLowerCase();
  if (category === "makeup") return "makeup,cosmetics";
  if (category === "skin") return "skincare,cosmetics";
  if (category === "fragrance") return "perfume,fragrance";
  if (category === "bath & body") return "bodylotion,soap";
  if (category === "hair") return "haircare,shampoo";
  
  return "beauty,cosmetics";
}

// Get image URL using Lorem Flickr fallback
function getLoremFlickrUrl(product: Product): string {
  const tags = getSearchTags(product);
  return `https://loremflickr.com/600/600/${tags}/all`;
}

// Download image with retries and convert to WebP using sharp
async function downloadImage(url: string, outputPath: string, retries = 3): Promise<boolean> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP Status ${response.status}`);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      try {
        const sharp = (await import("sharp")).default;
        await sharp(buffer).webp({ quality: 80 }).toFile(outputPath);
      } catch (sharpErr) {
        // Fallback: save buffer directly
        await fs.promises.writeFile(outputPath, buffer);
      }
      return true;
    } catch (e) {
      console.warn(`Attempt ${attempt} failed for URL ${url}:`, e);
      if (attempt === retries) return false;
      await new Promise((resolve) => setTimeout(resolve, 1000 * attempt)); // exponential backoff
    }
  }
  return false;
}

// In-place file updater for products.ts
function updateProductImageInFile(productId: number, newImagePath: string) {
  if (!fs.existsSync(PRODUCTS_FILE_PATH)) return;
  let content = fs.readFileSync(PRODUCTS_FILE_PATH, "utf8");
  
  // Regex to match the object block of the product by its ID and capture the image field
  const regex = new RegExp(`(id:\\s*${productId}\\s*,[^}]*?image:\\s*")([^"]+)(")`);
  if (regex.test(content)) {
    content = content.replace(regex, `$1${newImagePath}$3`);
    fs.writeFileSync(PRODUCTS_FILE_PATH, content, "utf8");
  }
}

async function run() {
  console.log("Starting Ecommerce Product Image Automation Script (Lorem Flickr fallback)...");
  console.log(`Target directory: ${PRODUCTS_DIR}`);
  console.log(`Database file: ${PRODUCTS_FILE_PATH}`);

  const report = {
    successful: [] as Array<{ id: number; name: string; file: string; source: string }>,
    skipped: [] as Array<{ id: number; name: string; file: string; reason: string }>,
    failed: [] as Array<{ id: number; name: string; reason: string }>
  };

  for (const product of ALL_PRODUCTS) {
    const fileSlug = slugify(`${product.brand}-${product.name}`);
    const fileName = `${fileSlug}.webp`;
    const localPath = `/products/${fileName}`;
    const fullOutputPath = path.join(PRODUCTS_DIR, fileName);

    // Skip condition: already has a local WebP image that exists in public/products
    const isAlreadyLocal = product.image.startsWith("/products/") && product.image.endsWith(".webp");
    if (isAlreadyLocal && fs.existsSync(fullOutputPath)) {
      report.skipped.push({
        id: product.id,
        name: product.name,
        file: fileName,
        reason: "Already has a local WebP image"
      });
      continue;
    }

    console.log(`\nProcessing product #${product.id}: "${product.name}" (${product.brand})`);

    let imageUrl: string | null = null;
    let sourceDescription = "";

    // Step 1: If product has a remote image URL, download it directly
    const isRemote = product.image.startsWith("http");
    const isPlaceholder = product.image === "/product.png" || product.image === "/hero.png" || !product.image;

    if (isRemote && !isPlaceholder) {
      imageUrl = product.image;
      sourceDescription = "Direct remote URL";
    } else {
      // Step 2: Use Lorem Flickr tagged image
      imageUrl = getLoremFlickrUrl(product);
      sourceDescription = `Lorem Flickr (${getSearchTags(product)})`;
    }

    console.log(`Downloading image from: ${imageUrl} (${sourceDescription})`);
    let success = await downloadImage(imageUrl, fullOutputPath);

    // Fallback: If downloading direct remote URL failed, search from Flickr
    if (!success && isRemote && !isPlaceholder) {
      console.log(`Direct remote URL download failed for Product #${product.id}. Falling back to Lorem Flickr search...`);
      imageUrl = getLoremFlickrUrl(product);
      sourceDescription = `Lorem Flickr Search Fallback (${getSearchTags(product)})`;
      console.log(`Downloading image from fallback: ${imageUrl}`);
      success = await downloadImage(imageUrl, fullOutputPath);
    }

    if (success) {
      console.log(`Successfully saved to ${localPath}`);
      // Update database file in-place
      updateProductImageInFile(product.id, localPath);
      report.successful.push({
        id: product.id,
        name: product.name,
        file: fileName,
        source: sourceDescription
      });
    } else {
      console.error(`Failed to download image for product #${product.id}`);
      report.failed.push({
        id: product.id,
        name: product.name,
        reason: "Download failed after retries"
      });
    }
  }

  // Generate Report
  console.log("\n==============================================");
  console.log("             AUTOMATION REPORT                ");
  console.log("==============================================");
  console.log(`Successful: ${report.successful.length}`);
  console.log(`Skipped:    ${report.skipped.length}`);
  console.log(`Failed:     ${report.failed.length}`);
  console.log("==============================================");

  // Write markdown report to artifacts folder
  const reportDir = path.join(process.cwd(), ".gemini", "antigravity", "brain", "d051543e-e929-47df-9838-b546c678f1d6");
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  const reportMd = `# Product Image Automation Report

Generated at: ${new Date().toLocaleString()}

## Summary
- **Successful Downloads:** ${report.successful.length}
- **Skipped Products:** ${report.skipped.length}
- **Failed Downloads:** ${report.failed.length}

## Successful Downloads
${report.successful.map((p) => `- **#${p.id} ${p.name}** -> Saved as \`${p.file}\` (Source: ${p.source})`).join("\n") || "None"}

## Skipped Products
${report.skipped.map((p) => `- **#${p.id} ${p.name}** -> \`${p.file}\` (${p.reason})`).join("\n") || "None"}

## Failed Downloads
${report.failed.map((p) => `- **#${p.id} ${p.name}**: ${p.reason}`).join("\n") || "None"}
`;

  fs.writeFileSync(path.join(reportDir, "image_download_report.md"), reportMd, "utf8");
  console.log(`Detailed report saved to: ${path.join(reportDir, "image_download_report.md")}`);
}

run().catch(console.error);
