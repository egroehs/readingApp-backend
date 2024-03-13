const readingModel = require("/Users/eduardagroehs/Desktop/GitHub/readingApp/backend/models/models.js")

module.exports.getReadingData = async (req, res) => {
    const readingData = await readingModel.find()
    res.send(readingData)
}

module.exports.saveReadingData = async (req, res) => {
    const { title, author, year, review, notes } = req.body

    readingModel.create({title, author, year, review, notes}).then((data) => {
        console.log('Added successfully');
        res.send(data)
    });
}

module.exports.editReadingData = async (req, res) => {
    const {_id, title, author, year, review, notes} = req.body
    
    readingModel.findByIdAndUpdate(_id, {title, author, year, review, notes})
    .then(() => res.send('Edited successfully'))
    .catch((err) => console.log(err))
}

module.exports.deleteReadingData = async (req, res) => {
    const {_id} = req.body
    readingModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted successfully'))
    .catch((err) => console.log(err))
}