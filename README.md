# Nyamata Roads Dashboard

An interactive geospatial mapping dashboard displaying the complete road network of Nyamata in Bugesera District, Rwanda.

## Features

- Interactive map using Leaflet.js
- Road network visualization with labels
- Search functionality
- Statistics and filtering
- GeoJSON and Shapefile data support
- Export capabilities

## Local Development

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Data Files

- `road_geoportal_dashboard.html` - Main application
- `Nyamata_Roads.shp` - Shapefile data
- `Nyamata_Roads1.geojson` - GeoJSON road data
- `Nyam_sector.geojson` - GeoJSON sector boundaries

## Deployment on Render

This project is configured for easy deployment on Render.

### Steps to Deploy:

1. Push your code to a GitHub repository
2. Go to [render.com](https://render.com)
3. Create a new Web Service
4. Connect your GitHub repository
5. Render will automatically detect the `render.yaml` configuration
6. Click Deploy

The application will be available at your Render service URL.

### Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (production/development)

## Built With

- [Express.js](https://expressjs.com/) - Web server
- [Leaflet.js](https://leafletjs.com/) - Interactive maps
- [GeoJSON](https://geojson.org/) - Geospatial data format

## License

MIT
