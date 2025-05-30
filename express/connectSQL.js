const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configure connection details to your PostgreSQL database
const pool = new Pool({
  user: 'UserSQL',
  host: 'localhost',          // or your DB host
  database: 'abhik1',
  password: 'Abhik@0987',
  port: 5432,                 // default PostgreSQL port
});

app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM customers'); // example query
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
