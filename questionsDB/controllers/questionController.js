const questionModel = require("../models/questionModel");
const pool = require("../db/db");

exports.addQuestion = async (req, res) => {
  try {
    const questionId = await questionModel.createQuestion(req.body);
    res
      .status(201)
      .json({ message: "Question added successfully", id: questionId });
  } catch (error) {
    console.error("Failed to add question:", error);
    res.status(500).json({ error: "Failed to add question" });
  }
};

exports.getAllQuestions = async (req, res) => {
  try {
    const query = "SELECT * FROM quiz_questions";
    const { rows } = await pool.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Failed to fetch questions:", error);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
};
