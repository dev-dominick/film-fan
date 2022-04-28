const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');

// get the movie by id for trailer
router.get('/', async (req,res) => {
  try {
    const movieData = await Movie.findAll({

    });
    res.json(movieData);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;



// create a new review,,,,, associating user id to review being created
router.post('/', withAuth, async (req, res) => {
  try {
    const newReview = await Review.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

// find all reviews
router.get("/", async (req, res) => {
  try {
    const allReviews = await Review.findAll();

    res.status(200).json(allReviews);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update review
router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Review.update({
    where: {
      id: req.params.id,
      user_id: req.session.user_id,
    },
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No review found." });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});



// delete review by id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!reviewData) {
      res.status(404).json({ message: 'No review found with this id!' });
      return;
    }

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
