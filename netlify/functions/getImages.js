const imageStore = []; // Array to hold uploaded images

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify(imageStore), // Return the array of images
    };
};
