const { Router } = require("express");
const {
  getReadingData,
  saveReadingData,
  editReadingData,
  deleteReadingData,
} = require("../controllers/readingAppController");

const router = Router()

router.get('/', getReadingData)
router.post('/save', saveReadingData)
router.post('/edit', editReadingData)
router.post("/delete", deleteReadingData)

module.exports = router