const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
  email: String,
  password: String
  // Add other fields and validations if needed
})

mongoose.model('Account', accountSchema)
