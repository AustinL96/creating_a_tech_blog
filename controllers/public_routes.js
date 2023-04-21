const router = require('express').Router();
const { Blogs } = require('../models');


//*** RENDER DATA FOR "/"***/ 
router.get('/', async (req, res) => {
  const blogs = await Blogs.findAll({
    raw: true
  });
  res.render('index', {
    blog: blogs,
  });
});

//*** RENDER DATA FOR "/login"***
router.get('/login', (req, res) => {
  res.render('./auth/login');
});

//*** RENDER DATA FOR "/signup"***
router.get('/signup', (req, res) => {
  res.render('./auth/signup');
});

module.exports = router;