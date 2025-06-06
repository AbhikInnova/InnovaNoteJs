require('dotenv').config();
const express = require('express');
const knex = require('knex')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const PORT =8000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

function authenticateToken(req, res, next) {
      const token = req.cookies.token;
  if (!token) return res.redirect('/login');
     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.redirect('/login');
      req.user = user;
    next();
  });
}

// Home page
app.get('/', authenticateToken, (req, res) => {
  res.render('home',{ name: req.user.username });
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await knex('users').where({ username }).first();
  if (existingUser) {
    return res.send('User already exists.');
  }
    const hashedPassword=await bcrypt.hash(password,10);
     await knex('users').insert({ username, password: hashedPassword });
  res.redirect('/login');
});

// Login form
app.get('/login', (req, res) => {
  res.render('login');
});
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await knex('users').where({ username }).first();
  if (!user) {
     res.redirect('/signup');
  }
    const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.send('Incorrect password');
  }

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.cookie('token', token, { httpOnly: true });// we can use httpOnly for securty purpose
  res.redirect('/');
});

// Logout
app.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
});

app.listen(PORT, () => {
  console.log('Server started');
});
