const Connection = require("../models/Connection");

exports.sendConnectionRequest = async (req, res) => {
  try {
    const { personId } = req.body;
    const requesterId = req.user._id; // assuming you're using auth middleware

    // Prevent sending to self
    if (requesterId.toString() === personId) {
      return res.status(400).json({ message: "Cannot connect with yourself." });
    }

    // Check if already connected or pending
    const existing = await Connection.findOne({
      requester: requesterId,
      recipient: personId,
    });

    if (existing) {
      return res.status(400).json({ message: "Request already exists." });
    }

    const connection = new Connection({
      requester: requesterId,
      recipient: personId,
    });

    await connection.save();
    res.status(201).json({ message: "Connection request sent.", connection });
  } catch (err) {
    res.status(500).json({ message: "Error sending request", error: err });
  }
};
