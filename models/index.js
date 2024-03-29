const User = require('./User');
const Movie = require('./Movie');
const Review = require('./Review')

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Movie.hasMany(Review, {
  foreignKey: 'movie_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

Review.belongsTo(Movie, {
  foreignKey: 'movie_id'
})

User.belongsToMany(Movie, {
  through: {
    model: Review, 
    unique: false

  }
})

Movie.belongsToMany(User, {
  through: {
    model: Review, 
    unique: false
    
  }
})

module.exports = { User, Review, Movie };
