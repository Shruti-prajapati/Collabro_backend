const mongoose = require("mongoose");

const userPlanSchema = new mongoose.Schema({
  selectedPlan: String,             // ✔️ matches plan.title
  price: String,                    // ✔️ plan.price is a string (e.g., "Rs.54/month")
  isFree: Boolean,                  // ✔️ boolean value
  features: [String],              // ✔️ array of strings
  billingCycle: {
    type: String,
    enum: ['Monthly', 'Annual'],    // ✔️ matches output of isAnnual ? 'Annual' : 'Monthly'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Plan", userPlanSchema);

  
