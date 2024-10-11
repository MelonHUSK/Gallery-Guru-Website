const { Handler } = require('netlify-lambda');
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const storage = multer.memoryStorage(); // Use memory storage for serverless functions
const upload = multer({ storage: storage }).single('photo');

exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    upload(event, context, (err) => {
      if (err) {
        reject({ statusCode: 400, body: JSON.stringify(err) });
      } else {
        // Process the file here
        resolve({
          statusCode: 200,
          body: JSON.stringify({ message: 'File uploaded successfully' })
        });
      }
    });
  });
};
