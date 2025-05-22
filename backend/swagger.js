// backend/swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'World Explorer API',
    description: 'API for managing a collection of destinations from all over the world.',
  },
  host: 'localhost:3000', // Change later when deployed
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js', './routes/destinations.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);