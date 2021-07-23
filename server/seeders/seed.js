const db = require('../config/connection');
const { User, TourPackage, Review} = require('../models');
const userSeeds = require('./userSeeds.json');
const tourSeeds = require('./tourSeeds.json');
const reviewSeeds = require('./reviewSeeds.json');

db.once('open', async () => {
  try {
    await TourPackage.create(tourSeeds);
   
    await User.deleteMany({});
    await User.create(userSeeds);
    await Review.create(reviewSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});


