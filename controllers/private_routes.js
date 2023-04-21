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
    try {
      const blogs = await Blogs.findAll({
        where: {
          poster_id: req.session.user_id
        },
        raw: true
      });
      const user = await User.findByPk(req.session.user_id);
      res.render('private/dashboard', {
        email: user.email,
        isLoggedIn: true,
        blog: blogs
      });
    } catch (err) {
      console.log(err);
    }
  });

module.exports = router;