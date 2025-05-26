const Trending = require('../models/Trending');

// Create a new trending topic
exports.createTrending = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;
    const newTrending = new Trending({ title, subtitle, description });
    const savedTrending = await newTrending.save();
    res.status(201).json(savedTrending);
  } catch (error) {
    res.status(500).json({ message: 'Error creating trending topic', error });
  }
};

// Get all trending topics
exports.getAllTrending = async (req, res) => {
  try {
    const topics = await Trending.find().sort({ createdAt: -1 });
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trending topics', error });
  }
};

// Get a single trending topic by ID
exports.getTrendingById = async (req, res) => {
  try {
    const topic = await Trending.findById(req.params.id);
    if (!topic) {
      return res.status(404).json({ message: 'Trending topic not found' });
    }
    res.status(200).json(topic);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trending topic', error });
  }
};

// Update a trending topic
exports.updateTrending = async (req, res) => {
  try {
    const updated = await Trending.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'Trending topic not found' });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error updating trending topic', error });
  }
};

// Delete a trending topic
exports.deleteTrending = async (req, res) => {
  try {
    const deleted = await Trending.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Trending topic not found' });
    }
    res.status(200).json({ message: 'Trending topic deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting trending topic', error });
  }
};
