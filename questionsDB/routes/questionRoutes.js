const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

// POST /api/questions - Add a new question
router.post("/", questionController.addQuestion);

// GET /api/questions - Get all questions
router.get("/", questionController.getAllQuestions);

module.exports = router;
