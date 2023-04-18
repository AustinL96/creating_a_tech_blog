const router = require('express').Router();
const { Blogs } = require('../models');

//*** RENDER DATA FOR "/"***/ 
router.get('/', async (req, res) => {
  const blogs = await Blogs.findAll({
    raw: true
  });
  res.render('index', {
    userName: 'Austin',
    blog: blogs,
    loggedIn: true
  });
// redirect back to '/' is a refresh 
// request.body reads the name on index input section, and it waits it. 
//Sequelize creates a new course_data, then it refreshes the page. 
  router.post('/blogs', async (req, res) => {
    const blog_data = req.body;
    await Blogs.create(blog_data);
    // console.log(course_data);
    res.redirect('/');
  })

});
//*** RENDER DATA FOR "/dashboard"***/ 
router.get('/dashboard', async (req, res) => {
  const blogs = await Blogs.findAll({
    raw: true
  });
  res.render('dashboard', {
    userName: 'Austin',
    blog: blogs,
    loggedIn: true
  });
});

//*** RENDER DATA FOR "/login"***/ 
router.get('/login', async (req, res) => {
  const blogs = await Blogs.findAll({
    raw: true
  });
  res.render('login', {
    userName: 'Austin',
    blog: blogs,
    loggedIn: false
  });
});

module.exports = router;