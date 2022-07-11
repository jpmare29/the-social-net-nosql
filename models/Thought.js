const mongoose = require('mongoose')

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        len: 1 - 280
    },

    
})

module.exports = mongoose.model('Thought', thoughtSchema);
