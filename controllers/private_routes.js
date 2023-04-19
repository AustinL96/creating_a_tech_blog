const router = require('express').Router();
const { Blogs, User } = require('../models/index');


function isAuthenticated(req, res, next) {
  if (!req.session.user_id) {
    return res.redirect('/login');
  }
  next();
}

//*** RENDER DATA FOR "/dashboard"***/ 
router.get('/dashboard', isAuthenticated, async (req, res) => {
    // const blogs = await Blogs.findAll({
    //   raw: true
    // });
    const user = await User.findByPk(req.session.user_id);
    res.render('private/dashboard', {
      email: user.email,
      // userName: 'Austin',
      // blog: blogs
    });

    // router.post('/blogs', async (req, res) => {
    //     const blog_data = req.body;
    //     await Blogs.create(blog_data);
    //     res.redirect('/');
    //   })
  });
module.exports = router;