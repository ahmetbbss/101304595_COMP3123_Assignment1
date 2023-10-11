const express = require('express');
const router = express.Router();
const User = require('../models/user_db');

// 1. POST - Allow user to create a new account
router.post('/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Error creating user.');
  }
});

// 2. POST - Allow user to log in
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      // User found, send a success message
      res.status(200).json({ status: true, message: 'User logged in successfully' });
    } else {
      // User not found or password doesn't match
      res.status(401).json({ status: false, message: 'Username or password is incorrect' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ status: false, message: 'Error during login' });
  }
});

module.exports = router;
