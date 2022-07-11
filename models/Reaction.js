const mongoose = require('mongoose')
const dateFormat = require('../utils/dateFormat')

const ReactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.SchemaTypes.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },

    reactionBody: {
        type: String,
        required: true,
        max: 280,
    },

    username: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: createdVal => dateFormat(createdVal)
    }
}, 
{
    toJSON: {
        virtuals: true,
        getters: true
    }
})

module.exports = Reaction;
