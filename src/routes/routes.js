const express = require('express');
const router = express.Router();
const Data = require('../models/dataModel');

// GET /api/data - Get all data
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

// POST /api/data - Create new data
router.post('/', async (req, res) => {
  try {
    const newData = new Data(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/data/:id - Get specific data by ID
router.get('/:id', async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;