const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(path.join(__dirname, '.')));

// Serve GeoJSON files with correct MIME type
app.use(express.json());

// Route for GeoJSON files
app.get('*.geojson', (req, res) => {
  res.setHeader('Content-Type', 'application/geo+json');
  express.static(path.join(__dirname, '.'))(req, res);
});

// Serve the main HTML file (Express automatically serves index.html from static directory)
// This route is optional as Express.static already handles it
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint (useful for Render)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Nyamata Roads Dashboard running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
