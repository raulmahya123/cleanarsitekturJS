const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  email: String,
  password: String,
});

mongoose.model('Account', accountSchema);
