const router = require('express').Router();
const { Blogs, User } = require('../models');


function isAuthenticated(req, res, next) {
  if (!req.session.user_id) {
  }
  next();
}

//*** RENDER DATA FOR "/"***/ 
router.get('/', isAuthenticated, async (req, res) => {
  const blogs = await Blogs.findAll({
    raw: true
  });
  const isLoggedIn = !!req.session.user_id;
  res.render('index', {
    blog: blogs,
    loggedIn: isLoggedIn
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