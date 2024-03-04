const mongoose = require("mongoose");

const {Schema} = mongoose

const CharSchema = new Schema({
  name: String,
  id: Number
});
// chars
const CharModel = mongoose.model("Char", CharSchema);

module.exports = { CharModel };
