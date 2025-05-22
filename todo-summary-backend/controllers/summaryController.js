const { getTodos } = require('../models/todoModel');
const { generateSummary } = require('../services/geminiService');
const { sendToSlack } = require('../services/slackService');

const summarizeTodos = async (req, res) => {
  try {
    const todos = getTodos();
    const summary = await generateSummary(todos);
    await sendToSlack(summary);
    res.status(200).json({ message: 'Summary sent to Slack!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate or send summary.' });
  }
};

module.exports = { summarizeTodos };
