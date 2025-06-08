
// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//OAuth
const authRoutes = require('./routes/auth');
const session = require('express-session');
const passport = require('passport');
require('./passport'); 


const destinationRoutes = require('./routes/destination');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);
const allowedOrigins = [
  'http://localhost:3000',
  'https://world-explorer-ucdk.onrender.com'
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

//API route
app.use('/api/destinations', destinationRoutes);

// Swagger Documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use((err, req, res, next) => {
  console.error(err); // 👈 this logs the full error to console
  res.status(500).json({ message: 'Server error', error: {} });
});

// MongoDB connection and server start
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((err) => console.log('MongoDB connection error:', err));
