const { CharModel } = require("../models/char.model");

const getData = async (req, res) => {
  const data = await CharModel.find();
  res.json(data);
};

module.exports = { getData };
