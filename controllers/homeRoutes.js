const router = require('express').Router();
const { Review, User, Movie } = require('../models');
const withAuth = require('../utils/auth');


// home routes with be getting/rendering data to specific pages
// this get route is getting all reviews on movies associated to the user
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const reviewData = await Review.findAll({
      include: [
        {
          model: User,
          attributes: ['userName'],
        },
      ],
    });

    const movieData = await Movie.findAll({
      // include: [
      //   {
      //     model: User,
      //     attributes: ['userName'],
      //   },
      // ],
    });

    // Serialize data so the template can read it
    const reviews = reviewData.map((review) => review.get({ plain: true }));
    const movies = movieData.map((movie) => movie.get({ plain: true }));
    // Pass serialized data and session flag into template
    // What page do you want to render the reviews onto???????
    res.render('homepage', { 
      reviews, 
      movies,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get review by id
router.get('/review/:id', async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['userName'],
        },
      ],
    });

    const review = reviewData.get({ plain: true });

    res.render('review', {
      ...review,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Review}], 
      include: [{
        model: Movie, 
        attributes: ['id', 'title']
      }]
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// if the user is logged in, redirect to next page after login, if user is not logged in, redirect to login page.
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
