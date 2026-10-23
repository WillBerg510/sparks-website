const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Base entry route
app.get('/', (req, res) => {
  res.send('Hello from your Express backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running smoothly on http://localhost:${PORT}`);
});