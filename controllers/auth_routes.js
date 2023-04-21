const router = require('express').Router();
const { Blogs, User }= require('../models/index');
const bcrypt = require('bcrypt');

//***LOGIN ROUTES */
router.post('/auth/login', async (req, res) => {
  // user_data = email and password
  const user_data = req.body;

  const user = await User.findOne({
    raw: true,
    where: {
      email: user_data.email
    }
  });

  //Should an account with no email exists, redirects them
  if (!user) return res.redirect('/signup');

  //Checks if the password matches, redirects if it doesn't
  const valid_pass = bcrypt.compareSync(user_data.password, user.password);
  if(!valid_pass) return res.redirect('/login');

  //After success, store the id to session then redirect to their dashboard
  req.session.user_id = user.id;
  res.redirect('/dashboard');
});

//*** SIGNUP ROUTES */
router.post('/auth/signup', async (req, res) => {
  // users email and password
  const user_data = req.body;

  try {
    const user = await User.create(user_data);

    req.session.user_id = user.id;
    res.redirect('/dashboard');
  } catch (err) {
    res.redirect('/login');
  }
});

//*** TO LOG OUT */
router.get('/auth/logout', (req, res) => {
  req.session.destroy();

  res.redirect('/');
})

//***CREATE NEW BLOGS */
router.post('/dashboard/newpost', async (req, res) => {
  const { titleText, bodyText } = req.body;

  try {
    const poster_id = req.session.user_id

    const newBlog = await Blogs.create({
      poster_id: poster_id,
      title: titleText,
      content: bodyText
    });
    console.log(`New blog added: ${newBlog.title}`);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


module.exports = router;