const express = require('express');
const Model = require('../Models/videoModel')
const router = express.Router();
const jwt =require("jsonwebtoken"); 
require('dotenv').config();
const {requireAuth}= require("../middleware/Authmiddleware")

router.post('/api/recordings',requireAuth, async (req, res) => {
    const { url } = req.body;
    const userId = req.user.id; // User ID from the verified token
  
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }
  
    try {
      const recording = await Model.create({ userId, url });
      res.status(201).json(recording);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Could not save recording' });
    }
  });

  router.get('/api/recordings', requireAuth, async (req, res) => {
    const userId = req.user.id; // User ID from the token
  
    try {
      const recordings = await Model.find({ userId });
      res.status(200).json(recordings);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Could not fetch recordings' });
    }
  });
  
  module.exports = router;