const express = require('express');
const router = express.Router();
const supabase = require('../services/supabaseClient');
const axios = require('axios');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

async function generateGeminiSummary(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1:generateContent?key=${GEMINI_API_KEY}`;

  const response = await axios.post(url, {
    contents: [{ parts: [{ text: prompt }] }],
  });

  return response.data.candidates[0].content.parts[0].text;
}


async function postToSlack(summary) {
  return await axios.post(SLACK_WEBHOOK_URL, { text: summary });
}

router.post('/', async (req, res) => {
  const { data: todos, error } = await supabase
    .from('todos')
    .select('title');

  if (error) return res.status(500).json({ error: error.message });

  const todoText = todos.map(todo => `- ${todo.title}`).join('\n');
  const prompt = `Summarize the following tasks:\n${todoText}`;

  try {
    const summary = await generateGeminiSummary(prompt);
    await postToSlack(summary);
    res.json({ message: 'Summary posted to Slack!', summary });
  } catch (err) {
    console.error('FULL ERROR:', err.response?.data || err.message || err);
    res.status(500).json({ error: 'Failed to summarize or post to Slack' });
  }
});



module.exports = router;
