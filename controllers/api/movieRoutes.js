const router = require("express").Router();
const { Movie } = require("../../models");
const withAuth = require("../../utils/auth");

// router.post("/", withAuth, async (req, res) => {
//   try {
//     const newMovie = await Movie.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newMovie);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });


// /api/movies gets data back
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