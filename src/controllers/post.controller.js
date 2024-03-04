const { CharModel } = require("../models/char.model");

const postData = async (req, res) => {
  const { name, id } = req.body;

  const newChar = new CharModel({
    name,
    id,
  });

  newChar.save();

  res.send("done !");
};

module.exports = { postData };
