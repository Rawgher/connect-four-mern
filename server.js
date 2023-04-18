const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });
const User = require('./models/user');
const PORT = process.env.PORT || 3001;
const cors = require('cors');

app.use(cors());
app.use(express.json());

async function mongoConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
  }
}

mongoConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send("The game's server is working");
});

app.post('/users', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
