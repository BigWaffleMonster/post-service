import { model, Schema, Types } from 'mongoose'

const PostSchema = new Schema({
  user_id: { type: Types.ObjectId, require: true },
  body: { type: String, require: true },
  likes: { type: Number, default: 0 },
  comments: [{ type: Types.ObjectId, ref: 'Comment' }]
})

export default model('Post', PostSchema)
