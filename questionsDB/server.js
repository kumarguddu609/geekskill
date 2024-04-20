const express = require("express");
const bodyParser = require("body-parser");
const questionRoutes = require("./routes/questionRoutes");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/questions", questionRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
