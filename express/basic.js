const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({extended:true}))//for get form data
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//app.use(middleware) attaches middleware that runs before route handlers (can modify request/response or handle errors).

//custom middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // pass control to next middleware or route
});

// express.json() — parses JSON request bodies
// express.urlencoded() — parses URL-encoded data

app.get('/users', (req, res) => {
  res.send('GET users');
});

app.post('/users', (req, res) => {
  const userData = req.body;
  res.status(201).send(`User created: ${JSON.stringify(userData)}`);
});

app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updates = req.body;
  res.send(`Update user ${userId} with ${JSON.stringify(updates)}`);
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Delete user ${userId}`);
});


//res.send ->Sends a response to the client — can be a string, object, array, Buffer, etc.
// res.send('Hello World');
// res.send({ message: 'OK' });
// res.send([1, 2, 3]);
// ->If you send an object/array, Express automatically calls res.json() behind the scenes.


//res.json ->Specifically sends a JSON response. Ensures proper Content-Type: application/json.
// res.json({ user: 'Alice', age: 25 });
//Use when returning API responses or structured data.
//Automatically stringifies the object and sets headers.

// res.status ->Sets the HTTP status code (e.g., 200 OK, 404 Not Found, 500 Internal Server Error).
// res.status(404).send('Not Found');
// res.status(201).json({ message: 'Created' });
// Use res.status() before res.send() or res.json() to control the response code.
// Status codes are important for client-side logic (e.g., error handling).


// 200 OK with plain text
// res.send('Everything is fine.');
// 200 OK with JSON
// res.json({ success: true, data: [1, 2, 3] });
// 201 Created with a custom message
// res.status(201).json({ message: 'Resource created' });
// 400 Bad Request
// res.status(400).send('Invalid input');
// 404 Not Found
// res.status(404).json({ error: 'User not found' });



// express.Router() is a class in Express used to create modular, mountable route handlers. 


// project/
// │
// ├── app.js
// ├── routes/
// │   ├── users.js
// │   └── products.js


//main app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

app.use(express.json());

// Mount routers
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



//routes/users.js: User Routes
const express = require('express');
const router = express.Router();
// GET /users
router.get('/', (req, res) => {
  res.send('List of users');
});
// GET /users/:id
router.get('/:id', (req, res) => {
  res.send(`User with ID ${req.params.id}`);
});
module.exports = router;


//routes/products.js: Product Routes
const express = require('express');
const router = express.Router();

// GET /products
router.get('/', (req, res) => {
  res.send('List of products');
});

// POST /products
router.post('/', (req, res) => {
  res.send('Product created');
});

module.exports = router;
    