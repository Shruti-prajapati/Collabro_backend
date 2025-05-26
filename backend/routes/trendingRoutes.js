const express = require('express');
const router = express.Router();
const Trending = require('../models/Trending');

// Get all trending topics
router.get('/', async (req, res) => {
  try {
    const topics = await Trending.find().sort({ createdAt: -1 });
    res.json(topics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new trending topic
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const topic = new Trending({ title, description });
    await topic.save();
    res.status(201).json(topic);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
