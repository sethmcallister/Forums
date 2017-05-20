import mongoose from 'mongoose'
import { mongodbServer } from '../site.config'

mongoose.connect('mongodb://mongodb/users')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  _id: String,
  lastName: String,
  group: String,
  posts: [],
  replies: []
})

export default mongoose.model('user', UserSchema)
