// const express = require('express');
// const routes = require('./routes');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
// const axios = require('axios'); 
// const app = express();
// const Task = require('./models/tasks')
// const Product = require('./models/products')
// const PORT = process.env.PORT || 5000;



// app.use(cors());
// app.use('/api', routes);
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());

// mongoose.connect('mongodb+srv://lg23:dtBHZXMwmLBniCv3@cluster0.urh7n0j.mongodb.net/dishtv', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//   });



// // app.get('/', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// // });


// // app.get('/admin', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'public', 'admin.html'));
// // });


// // app.get('/fetch-tasks', async (req, res) => {
// //   try {
// //     const response = await axios.get('http://localhost:3000/api/tasks'); // Replace with the actual URL and port
// //     const tasks = response.data;
// //     res.json(tasks);
// //   } catch (error) {
// //     console.error('Error fetching tasks:', error);
// //     res.status(500).json({ error: 'Failed to fetch tasks' });
// //   }
// // });


// // app.post('/api/products', async (req, res) => {
// //   try{
// //     const product = new Product(req.body);
// //     console.log(product)
// //     product.save()

// //     const task= await Task.create({
// //       title:"Work in Progress",
// //       description:'In Progress',
// //       product: product._id
// //     })
// //     res.json(product);
// //   }  catch(error){
// //     console.log("error creating user and comment",error)
// //     res.status(500).json({error:'Internal server eror'})
// //   }
   
// // });

// // app.get('/api/products', (req, res) => {
// //   Product.find()
// //     .then((products) => {
// //       res.json(products);
// //     })
// //     .catch((err) => {
// //       res.status(500).json({ error: 'Failed to fetch products' });
// //     });
// // });


// // // Fetch product details by ID
// // app.get('/api/products/:productId', (req, res) => {
// //   const productId = req.params.productId;

// //   // Validate the product ID before querying the database
// //   if (!mongoose.Types.ObjectId.isValid(productId)) {
// //     return res.status(400).json({ error: 'Invalid product ID' });
// //   }

// //   Product.findById(productId)
// //     .then((product) => {
// //       if (!product) {
// //         return res.status(404).json({ error: 'Product not found' });
// //       }
// //       res.json(product);
// //     })
// //     .catch((err) => {
// //       console.error('Error fetching product details:', err);
// //       res.status(500).json({ error: 'Failed to fetch product details' });
// //     });
// // });


// // // Endpoint for updating product details
// // app.put('/api/products/:productId', (req, res) => {
// //   const productId = req.params.productId;

// //   // Validate the product ID before updating
// //   if (!mongoose.Types.ObjectId.isValid(productId)) {
// //     return res.status(400).json({ error: 'Invalid product ID' });
// //   }

// //   const updatedProductData = req.body;
// //   // Validate the updated product data here if needed

// //   // Find the product by ID and update its details
// //   Product.findByIdAndUpdate(productId, updatedProductData, { new: true })
// //     .then((updatedProduct) => {
// //       if (!updatedProduct) {
// //         return res.status(404).json({ error: 'Product not found' });
// //       }
// //       res.json(updatedProduct);
// //     })
// //     .catch((err) => {
// //       console.error('Error updating product:', err);
// //       res.status(500).json({ error: 'Failed to update the product' });
// //     });
// // });

// // // Endpoint for deleting a product
// // app.delete('/api/products/:productId', (req, res) => {
// //   const productId = req.params.productId;

// //   // Validate the product ID before deleting
// //   if (!mongoose.Types.ObjectId.isValid(productId)) {
// //     return res.status(400).json({ error: 'Invalid product ID' });
// //   }

// //   // Find the product by ID and delete it
// //   Product.findByIdAndRemove(productId)
// //     .then((deletedProduct) => {
// //       if (!deletedProduct) {
// //         return res.status(404).json({ error: 'Product not found' });
// //       }
// //       res.json({ message: 'Product deleted successfully' });
// //     })
// //     .catch((err) => {
// //       console.error('Error deleting product:', err);
// //       res.status(500).json({ error: 'Failed to delete the product' });
// //     });
// // });





// // //taskssss
// // app.get('/tasks', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'public', 'tasks.html'));
// // })
// // // Routes
// // app.get('/api/tasks', async (req, res) => {
// //   try {
// //     const tasks = await Task.find();
// //     console.log(tasks);
// //     res.json(tasks);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // });



// // //get all the tasks for a product
// // app.get('/api/tasks/:productId', async (req,res) =>{
// //   console.log("hello workd")
// //   try{
// //     const productId = req.params.productId;

// //     const tasks = await Task.find({product: productId})

// //     res.json({tasks})
// //   }catch(error){
// //     console.log("error fetch tasks",error)
// //     res.status(500).json({error: 'Internal server error'})
// //   }
// // })


 
// // app.post('/api/tasks/:productId', async (req, res) => {
// //   try {
// //     const productId = req.params.productId;
// //     const product = await Product.findById(productId)

// //     if (!product){
// //       console.log("user not found")
// //       return res.status(404).json({error:'User not found'})
// //     }

// //     const task = new Task(req.body);
// //     product.tasks.push(task)
// //     await product.save();
// //     res.status(201).json(task);
// //   } catch (error) {
// //     console.log("Error adding comment: ", error)
// //     res.status(400).json({ error: 'Bad request' });
// //   }
// // });

// // app.put('/api/tasks/:id', async (req, res) => {
// //   try {
// //     const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
// //     res.json(task);
// //   } catch (error) {
// //     res.status(400).json({ error: 'Bad request' });
// //   }
// // });

// // app.put('/api/tasks/:id/complete', async (req, res) => {
// //   try {
// //     const task = await Task.findByIdAndUpdate(req.params.id, { completed: true }, { new: true });
// //     res.json(task);
// //   } catch (error) {
// //     res.status(400).json({ error: 'Bad request' });
// //   }
// // });

// // app.delete('/api/tasks/:id', async (req, res) => {
// //   try {
// //     await Task.findByIdAndDelete(req.params.id);
// //     res.sendStatus(204);
// //   } catch (error) {
// //     res.status(400).json({ error: 'Bad request' });
// //   }
// // });


// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });






















































const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const axios = require('axios'); 
const app = express();
const Task = require('./models/tasks');
const Product = require('./models/products');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://lg23:dtBHZXMwmLBniCv3@cluster0.urh7n0j.mongodb.net/dishtv', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Import and use the routes
const routes = require('./routes');
app.use('/api', routes);

// ...
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('/prod', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'product.html'));
});
app.get('/tasks', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tasks.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
