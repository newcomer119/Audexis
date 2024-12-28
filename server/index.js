require('dotenv').config();
global.fetch = require('node-fetch');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const uploadRouter = require('./routes/upload');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Configure multer for file upload
const upload = multer({ storage: multer.memoryStorage() });

// Add this debugging code
console.log('Environment check:');
console.log('DROPBOX_ACCESS_TOKEN exists:', !!process.env.DROPBOX_ACCESS_TOKEN);
console.log('DROPBOX_ACCESS_TOKEN first 5 chars:', process.env.DROPBOX_ACCESS_TOKEN?.slice(0, 5));

// Routes
app.use('/api/upload', uploadRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});