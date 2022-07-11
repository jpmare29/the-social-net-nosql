const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true
    },

    email: {
        type: String,
        unique: true,
        required: true,
        validate: email
    },
    
    thoughts: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Thought'
    },

    friends: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }
},
{
    toJSON: {
        virtuals: true
    }
}
)

userSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

module.exports = mongoose.model('User', userSchema)
