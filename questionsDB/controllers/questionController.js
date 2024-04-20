const questionModel = require("../models/questionModel");

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
