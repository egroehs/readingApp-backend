const express = require('express')
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const cors = require('cors')
const PORT = 5001
const routes = require('./routes/readingAppRoutes')

const app = express()

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

app.use(express.json())
app.use(cors())

mongoose.connect(
  "mongodb+srv://eduardagroehs:Duda2102@readingapp.wrq67kl.mongodb.net/readingApp?retryWrites=true&w=majority&appName=ReadingApp"
).then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log(err)
})

app.use(routes);
