const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

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

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// const user = new User({
//   username: 'test',
//   password: 'test1',
// });

// user.save();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send("The game's server is working");
});
