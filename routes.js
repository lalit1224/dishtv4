const express = require('express');
const router = express.Router();
const Product = require('./models/products');
const Task = require('./models/tasks');

// Route to get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to get a particular product by ID
router.get('/products/:productId', async (req, res) => {
  const productId = req.params.productId;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to add a new product
router.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to edit a product by ID
router.put('/products/:productId', async (req, res) => {
  const productId = req.params.productId;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to delete a product by ID
router.delete('/products/:productId', async (req, res) => {
  const productId = req.params.productId;

  try {
    const deletedProduct = await Product.findByIdAndRemove(productId);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    // Delete all tasks associated with the deleted product
    await Task.deleteMany({ product: productId });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to add a new task associated with a product
router.post('/products/:productId/tasks', async (req, res) => {
    const productId = req.params.productId;
  
    try {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      const taskData = req.body; // Assuming the JSON data is in the request body
  
      const task = new Task(taskData);
      task.product = product._id;
      await task.save();
  

      // Add the task to the product's tasks array
if (!product.tasks) {
    product.tasks = []; // Initialize the tasks array if it doesn't exist
  }
      // Add the task to the product's tasks array
      product.tasks.push(task);
      await product.save();
  
      res.status(201).json(task);
    } catch (error) {
      console.error('Error adding a new task:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
// Route to list all tasks associated with a particular product
router.get('/products/:productId/tasks', async (req, res) => {
  const productId = req.params.productId;

  try {
    const tasks = await Task.find({ product: productId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to edit a task associated with a particular product by ID
router.put('/products/:productId/tasks/:taskId', async (req, res) => {
  const productId = req.params.productId;
  const taskId = req.params.taskId;

  try {
    const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, {
      new: true,
    });
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to delete a task associated with a particular product by ID
router.delete('/products/:productId/tasks/:taskId', async (req, res) => {
  const productId = req.params.productId;
  const taskId = req.params.taskId;

  try {
    const deletedTask = await Task.findByIdAndRemove(taskId);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
