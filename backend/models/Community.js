const communitySchema = new mongoose.Schema({
    name: String,
    description: String,
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    createdAt: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model("Community", communitySchema);