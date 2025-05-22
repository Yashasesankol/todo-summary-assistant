require('dotenv').config();
const axios = require('axios');

async function testSlack() {
  try {
    const res = await axios.post(
      process.env.SLACK_WEBHOOK_URL,
      { text: "✅ Hello from Todo Summary Assistant test!" }
    );
    console.log("Slack success:", res.status); // Should be 200
  } catch (err) {
    console.error("Slack error:", err.response?.data || err.message);
  }
}

testSlack();
