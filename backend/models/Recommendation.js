const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  // Directly added fields
  username: String,
  profession: String,
  location: String,

  suggestedUsers: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  ],

  generatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Recommendation", recommendationSchema);
