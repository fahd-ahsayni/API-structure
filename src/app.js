const { animesRouter } = require("./routes/router");

const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://fahdahsayni:test123@animes.r63dmcf.mongodb.net/?retryWrites=true&w=majority&appName=animes")

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

app.use("/api", animesRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
