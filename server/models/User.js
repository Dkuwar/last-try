const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  resumes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resume' }],
});

module.exports = mongoose.model('User', UserSchema);
