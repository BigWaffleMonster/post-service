import { model, Schema, Types } from 'mongoose'

const CommentSchema = new Schema({
  user_id: { type: Types.ObjectId, require: true },
  body: { type: String, require: true },
})

export default model('Comment', CommentSchema)
