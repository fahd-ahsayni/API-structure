const express = require("express");
const { getData } = require("../controllers/get.controller");
const { postData } = require("../controllers/post.controller");

const animesRouter = express.Router();

animesRouter.get("/", getData);

animesRouter.post("/", postData);


module.exports = { animesRouter };
