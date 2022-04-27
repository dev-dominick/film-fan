const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const movieData = require('./movieData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // bulk create seeded users, possibly seed users
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // bulk create of seeded data, aka movie and review data
  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
