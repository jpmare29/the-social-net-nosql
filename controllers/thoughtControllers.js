const { Thought } = require('../models')

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
        .then(thoughtData => res.json(thoughtData))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'No Thought with this ID'})
                    return
                }

                res.json(thoughtData)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    createThought({ body }, res) {
        Thought.create(body)
            .then(thoughtData => res.json(thoughtData))
            .catch(err => res.status(400).json(err))
    },

    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'No Thought with this ID' })
                    return;
                }
                res.json(thoughtData)
            })
            .catch(err => res.status(400).json(err))
    },

    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'No Thought with this ID' })
                    return;
                }
                res.json(thoughtData)
            })
            .catch(err => res.status(400).json(err))
    }

}

module.exports = thoughtController;
