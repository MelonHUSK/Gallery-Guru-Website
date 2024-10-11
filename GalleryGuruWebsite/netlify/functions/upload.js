let imageStore = []; // In-memory storage for uploaded images (base64)

exports.handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body);
    const imageData = body.image; // Base64-encoded image

    // Add the uploaded image to the in-memory store
    imageStore.push({
      id: Date.now(), // Unique ID for the image
      data: imageData
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Photo uploaded successfully!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error uploading photo" }),
    };
  }
};
