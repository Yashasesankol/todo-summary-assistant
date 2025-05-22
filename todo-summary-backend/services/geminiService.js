const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateSummary = async (todos) => {
  const prompt = `Summarize the following todo list:\n\n${todos.map((t, i) => `${i+1}. ${t.title}`).join('\n')}`;

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
};

module.exports = { generateSummary };
