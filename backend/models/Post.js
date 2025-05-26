const postSchema = new mongoose.Schema({
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: String,
    title: String,
    content: String,
    media: String,
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        comment: String,
        timestamp: Date,
      },
    ],
    tags: [String],
    createdAt: { type: Date, default: Date.now },
  });

postSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
  },
});
  module.exports = mongoose.model("Post", postSchema);
  
