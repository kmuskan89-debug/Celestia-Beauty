/* eslint-disable */
const cloudinary = require("cloudinary").v2;

// 1. Configure Cloudinary inline
cloudinary.config({
  cloud_name: "duvm3koai",
  api_key: "414948596786779",
  api_secret: "WTkap7dd9HrIaLPBSmuyNBIM5Aw",
});

async function runOnboarding() {
  try {
    const sampleImageUrl = "https://res.cloudinary.com/demo/image/upload/sample.jpg";

    console.log("Uploading sample image...");
    // 2. Upload an image
    const uploadResult = await cloudinary.uploader.upload(sampleImageUrl, {
      public_id: "cloudinary_onboarding_sample",
    });

    console.log("Upload successful!");
    console.log(`Secure URL: ${uploadResult.secure_url}`);
    console.log(`Public ID: ${uploadResult.public_id}`);

    console.log("\nFetching image details...");
    // 3. Get image details
    console.log(`Width: ${uploadResult.width}px`);
    console.log(`Height: ${uploadResult.height}px`);
    console.log(`Format: ${uploadResult.format}`);
    console.log(`File Size: ${uploadResult.bytes} bytes`);

    console.log("\nTransforming the image...");
    // 4. Transform the image
    // f_auto (fetch_format: 'auto') - Automatically selects the best image format (e.g. WebP/AVIF) supported by the browser.
    // q_auto (quality: 'auto') - Automatically compresses quality to the sweet spot without losing noticeable visual clarity.
    const transformedUrl = cloudinary.url(uploadResult.public_id, {
      secure: true,
      fetch_format: "auto",
      quality: "auto",
    });

    console.log("Done! Click link below to see optimized version of the image. Check the size and the format.");
    console.log(transformedUrl);
  } catch (error) {
    console.error("An error occurred during Cloudinary operations:", error);
  }
}

runOnboarding();
