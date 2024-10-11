const express = require('express');
const multer = require('multer');
const path = require('path');

// Create Express app
const app = express();

// Configure storage for multer
const storage = multer.memoryStorage(); // Store files in memory for serverless functions
const upload = multer({ storage: storage }).single('photo');

// Export handler for Netlify function
exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    // Use multer to handle the incoming request
    upload(event, context, (err) => {
      if (err) {
        reject({
          statusCode: 400,
          body: JSON.stringify({ error: err.message })
        });
      } else {
        if (!event.body) {
          reject({
            statusCode: 400,
            body: JSON.stringify({ error: 'No file provided' })
          });
        } else {
          // Here you can handle the uploaded file, e.g., save to cloud storage
          resolve({
            statusCode: 200,
            body: JSON.stringify({ message: 'File uploaded successfully' })
          });
        }
      }
    });
  });
};
