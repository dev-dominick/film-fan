const router = require("express").Router();
const { Movie } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const movieData = await Movie.findAll({});
    res.json(movieData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// /api/movies gets data back
router.get('/results/:searchresult', async (req,res) => {
  const searchedMovie = JSON.stringify(req.params.searchresult)
  try {
    const movieData = await Movie.findAll({
      where: {
        title: searchedMovie,
      }
    });
    res.json(movieData);
      res.render("results", {
        movieData,
        logged_in: req.session.logged_in,
      });
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;