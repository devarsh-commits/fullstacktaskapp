import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { todo } from './models/todo.js';
import router from './route.js';
// import activity from './activity.js';

dotenv.config(); // ✅ Load env variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// Routes
app.use('/finished', router);
// app.use('/activity', activity);

app.get('/', async (req, res) => {
  try {
    const Todo = await todo.find().sort({ orderby: -1 });
    res.json(Todo);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos" });
  }
});

app.post('/', async (req, res) => {
  try {
    const mytodo = req.body;
    const Todo = new todo({
      id: mytodo.id,
      todo: mytodo.todo,
      isCompleted: mytodo.isCompleted,
      day: mytodo.day
    });
    await Todo.save();
    res.send('Done');
  } catch (error) {
    res.status(500).json({ message: "Error saving todo" });
  }
});

app.put('/:id', async (req, res) => {
  try {
    const updatedTask = await todo.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Error updating task" });
  }
});

app.delete('/:id', async (req, res) => {
  try {
    await todo.findByIdAndDelete(req.params.id);
    res.send("Task deleted successfully!");
  } catch (error) {
    res.status(500).json({ message: "Error deleting task" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
