const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

router.get('/', async (req, res) => {
  const tasks = await Task.find();

  res.json(tasks);
});

router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);

  res.json(task);
});

router.post('/', async (req, res) => {
  const task = new Task(req.body);

  await task.save();

  res.json({successOnCreate: true}).status(200);
});

router.put('/:id', async (req, res) => {
  const recordId = req.params.id;

  const record = await Task.findByIdAndUpdate(recordId, req.body);

  res.json({ successOnUpdate: true}).status(200);
});

router.delete('/:id', async (req, res) => {
  const recordId = req.params.id;

  await Task.findByIdAndRemove(recordId);

  res.json({ successOnDelete: true}).status(200);
});


module.exports = router;
