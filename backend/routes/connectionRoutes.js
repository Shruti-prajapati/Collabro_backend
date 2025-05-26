const express = require("express");
const router = express.Router();
const { sendConnectionRequest } = require("../controllers/connectionController");
const authMiddleware = require("../middleware/auth"); // adjust as per your app

router.post("/request", authMiddleware, sendConnectionRequest);

module.exports = router;

