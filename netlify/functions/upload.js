const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

exports.handler = async (event, context) => {
    return new Promise((resolve, reject) => {
        upload.single('photo')(event, context, (err) => {
            if (err) {
                reject({
                    statusCode: 400,
                    body: JSON.stringify({ error: err.message }),
                });
            } else {
                if (!event.body) {
                    reject({
                        statusCode: 400,
                        body: JSON.stringify({ error: 'No file provided' }),
                    });
                } else {
                    // Add image to imageStore
                    const image = event.body; // Assuming image data is in event.body
                    imageStore.push(image);
                    resolve({
                        statusCode: 200,
                        body: JSON.stringify({ message: 'File uploaded successfully' }),
                    });
                }
            }
        });
    });
};
