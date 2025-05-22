const axios = require('axios');

const sendToSlack = async (message) => {
  return await axios.post(process.env.SLACK_WEBHOOK_URL, { text: message });
};

module.exports = { sendToSlack };
