import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";



export async function POST(req: Request) {
  try {
    // Configure Cloudinary inside handler to guarantee env variables are loaded
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convert file to base64 data URI
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const fileUri = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Upload directly to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(fileUri, {
      folder: "celestia_products",
    });

    return NextResponse.json({ secure_url: uploadResult.secure_url });
  } catch (error) {
    console.error("Cloudinary upload error details:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to upload image";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
