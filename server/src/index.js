console.log("Starting");
if (process.env.NODE_ENV !== "production") {
  require("dotenv/config");
}
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

mongoose.connect(`mongodb://mongo:27017/${process.env.DATABASE_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(PORT, () => {
  console.log(`App listening on port:${PORT}`);
});
