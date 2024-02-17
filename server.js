const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');

// Set port number and create express app
const PORT = process.env.PORT || 3009;
const app = express();

// Middlewarefunctions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// Start server and signify port number
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});