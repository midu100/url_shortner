const mongoose = require("mongoose");

const shortnerSchema = new mongoose.Schema({
  urlLong: { type: String, required: true },
  urlShort: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "myUser" },
  visitHistory: [
    {
      visitTime: { type: Date },
    },
  ],
});

module.exports = mongoose.model("shortUrl", shortnerSchema);
