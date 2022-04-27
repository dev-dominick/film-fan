const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const movieRoutes = require('./movieRoutes')
const homeRoutes = require('../homeRoutes')

router.use('/', homeRoutes);
router.use('/api', )
router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/movies', movieRoutes)

module.exports = router;
