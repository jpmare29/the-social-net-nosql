const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },
    
    thoughts: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Thought'
    }],

    friends: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }]
},
{
    toJSON: {
        virtuals: true
    }
}
)

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

module.exports = mongoose.model('User', UserSchema)
