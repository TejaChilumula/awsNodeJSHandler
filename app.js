const express = require('express');
//const mongoose = require('./src/db/mongoose');
const routes = require('./src/routes/routes');
const cors = require("cors");
const serverless = require("serverless-http");


const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/shoes', routes);

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

module.exports.handler = serverless(app);