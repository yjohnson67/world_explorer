// backend/swagger.js
const swaggerAutogen = require('swagger-autogen')();

const isProduction = process.env.NODE_ENV ==='production';
const productionHost = 'world-explorer-ucdk.onrender.com'

const doc = {
  info: {
    title: 'World Explorer API',
    description: 'API for managing a collection of destinations from all over the world.',
  },
  host: isProduction ? productionHost: 'localhost:3000', // Change later when deployed
  schemes: isProduction ? ['https'] : ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js', './routes/destinations.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);