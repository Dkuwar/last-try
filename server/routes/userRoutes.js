const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Example route to create a user
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  await newUser.save();
  res.json(newUser);
});

module.exports = router;
