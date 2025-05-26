const mongoose = require('mongoose');

const trendingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String }, // ← Added subtitle
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Trending', trendingSchema);
