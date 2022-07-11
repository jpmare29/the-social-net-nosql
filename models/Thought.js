const mongoose = require('mongoose')
const dateFormat = require('../utils/dateFormat')

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: createdVal => dateFormat(createdVal)
    },

    reactions: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Reaction'
    }
},
{
    toJSON: {
        virtuals: true,
        getters: true
    }
})

module.exports = mongoose.model('Thought', thoughtSchema);
