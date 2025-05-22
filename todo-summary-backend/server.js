require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const summaryRoutes = require('./routes/summaryRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/todos', todoRoutes);
app.use('/summarize', summaryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
