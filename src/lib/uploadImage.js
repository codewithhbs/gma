import cloudinary from "./cloudinary";

export async function uploadToCloudinary(filePath, folder = "blogs") {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type: "image",
    });

    return {
      url: result.secure_url,
      key: result.public_id,
    };
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    return null;
  }
}

export async function deleteFromCloudinary(key) {
  if (!key) return;

  try {
    await cloudinary.uploader.destroy(key);
  } catch (error) {
    console.error("Cloudinary Delete Error:", error);
  }
}
