
const axios = require('axios');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function listModels() {
  const url = `https://generativelanguage.googleapis.com/v1/models?key=${GEMINI_API_KEY}`;

  try {
    const response = await axios.get(url);
    console.log('Available models:');
    response.data.models.forEach((model) => {
      console.log(`- ${model.name}`);
    });
  } catch (error) {
    console.error('Error listing models:', error.response?.data || error.message);
  }
}

listModels();
