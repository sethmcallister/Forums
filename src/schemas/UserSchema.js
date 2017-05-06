var mongoose = require('mongoose')
mongoose.connect('mongodb://mongodb/users')
var Schema = mongoose.Schema

var UserSchema = new Schema(
    {
        _id: String,
        lastName: String,
        group: String,
        Posts: [],
        Replies: []
    }
)

module.exports = mongoose.model('user', UserSchema)