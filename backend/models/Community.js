const communitySchema = new mongoose.Schema({ 
    name: String,
    description: String,
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    createdAt: { type: Date, default: Date.now },
  });
  
communitySchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
  }
});

module.exports = mongoose.model("Community", communitySchema);
