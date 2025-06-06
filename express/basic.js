// // const express = require('express');
// // const app = express();
// // const PORT = 3000;


// // Start server
// // app.listen(PORT, () => {
// //     console.log(`Server running on port ${PORT}`);
// // });




// //middleware:->
// //app.use(middleware) attaches middleware that runs before route handlers (can modify request/response or handle errors).

// app.use(express.json());//Middleware to parse incoming requests with JSON playloads(chunk of data in format of json),,,can be accessable from req.body;
// app.use(express.urlencoded({extended:true}))//Parses incoming URL-encoded data (e.g., from HTML forms)-> true means accept nested object 

// //custom middleware
// //basically if i delcreare middleware like this it will be called for every incoming request 
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next(); // pass control to next middleware or route
// });
// //but if we want to check middleware for some specific router then we have to clear it without app.use()
//  function auth(req,res,next){
//     if(true){
//         next()
//     }
//     else res.status(401).send("unauth");
//  }

//  app.get('/private', auth, (req, res) => {
//   res.send('Private route, you are authenticated');
// });

// //error handling useing middleware
// app.use((err,req,res,next)=>{
// console.log(err.stack);//gives the location of error
// res.status(500).send("internal server error");
// })


// app.get('/error', (req, res) => {
//   try{
//     throw new Error("new error");
//   }
//   catch(err){
// console.log(err.message);
//   }
// });
// // Express will catch the error and call the error middleware above




// //handelers
// app.get('/users', (req, res) => {
//   res.send('GET users');
// });

// app.post('/users', (req, res) => {
//   const userData = req.body;
//   res.status(201).send(`User created: ${JSON.stringify(userData)}`);
// });

// app.put('/users/:id', (req, res) => {
//   const userId = req.params.id;
//   const updates = req.body;
//   res.send(`Update user ${userId} with ${JSON.stringify(updates)}`);
// });

// app.delete('/users/:id', (req, res) => {
//   const userId = req.params.id;
//   res.send(`Delete user ${userId}`);
// });


// // res.send ->Sends a response to the client — can be a string, object, array, Buffer, etc.
// // res.send('Hello World');
// // res.send({ message: 'OK' });
// // res.send([1, 2, 3]);
// // ->If you send an object/array, Express automatically calls res.json() behind the scenes.


// //res.json ->Specifically sends a JSON response. Ensures proper Content-Type: application/json.
// // res.json({ user: 'Alice', age: 25 });
// //Use when returning API responses or structured data.
// //Automatically stringifies the object and sets headers.


// // Use res.status() before res.send() or res.json() to control the response code.
// // Status codes are important for client-side logic (e.g., error handling).

// // 200 OK with plain text
// // res.send('Everything is fine.');
// // 200 OK with JSON
// // res.json({ success: true, data: [1, 2, 3] });
// // 201 Created with a custom message
// // res.status(201).json({ message: 'Resource created' });
// // 400 Bad Request
// // res.status(400).send('Invalid input');
// // 404 Not Found
// // res.status(404).json({ error: 'User not found' });
// //500->error


const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL connection
const pool = new Pool({
  user: 'your_pg_user',
  host: 'localhost',
  database: 'your_db',
  password: 'your_password',
  port: 5432,
});

// Parameter middleware
app.param('userId', async (req, res, next, userId) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);

    if (result.rows.length === 0) {
      return res.status(404).send('User not found');
    }

    req.user = result.rows[0]; // attach user to request
    next();
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

// Route using userId
app.get('/users/:userId', (req, res) => {
  res.send(`User Name: ${req.user.name}, Email: ${req.user.email}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


// // authentication 
// //  cookies are domain specific