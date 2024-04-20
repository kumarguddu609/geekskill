const pool = require("../db/db");

// Create table if not exists
pool
  .query(
    `
  CREATE TABLE IF NOT EXISTS quiz_questions (
    id SERIAL PRIMARY KEY,
    question TEXT NOT NULL,
    description TEXT,
    answers JSONB NOT NULL,
    multiple_correct_answers BOOLEAN,
    correct_answers JSONB NOT NULL,
    explanation TEXT,
    tags TEXT[],
    category TEXT,
    difficulty TEXT
  );
`
  )
  .catch((err) => console.error("Error creating table:", err));

console.log("Table created successfully");

module.exports = {
  createQuestion: async (questionData) => {
    const {
      question,
      description,
      answers,
      multiple_correct_answers,
      correct_answers,
      explanation,
      tags,
      category,
      difficulty,
    } = questionData;

    const { rows } = await pool.query(
      `INSERT INTO quiz_questions 
      (question, description, answers, multiple_correct_answers, correct_answers, explanation, tags, category, difficulty) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
      RETURNING id`,
      [
        question,
        description,
        answers,
        multiple_correct_answers,
        correct_answers,
        explanation,
        tags,
        category,
        difficulty,
      ]
    );

    return rows[0].id;
  },
};
