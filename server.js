const mongoose = require('mongoose')
const express = require('express')
const fullRoutes = require('./routes/index')

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/', fullRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/socialnetwork", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.set('debug', true)

app.listen(PORT, console.log('Now connected'))
