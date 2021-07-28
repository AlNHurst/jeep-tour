const db = require('../config/connection');
const { User, TourPackage, Review, Product, Order} = require('../models');
const tourSeeds = require('./tourSeeds.json');
const reviewSeeds = require('./reviewSeeds.json');
const productSeeds = require('./productSeeds.json');



db.once('open', async () => {
  try {
    await TourPackage.deleteMany({});

    const tourPackage = await TourPackage.insertMany([
      {
        "name": "Northern Escape",
        "shortDescription": "Discover the beauty of Aruba's Northern Coast! This tour offers the opportunity to explore some of Aruba's most spectacular features.",
        "longDescription": "This tour features a visit to the California Lighthouse, The Butterfly Farm, and Druif Beach. At Druif Beach, you will enjoy lunch, which is included in your package. Our expert tour guides will assist you along the way with anything you need. Be sure to bring your swimwear as there will be many opportunities to snorkel and enjoy the pristine waters of Aruba. ",
        "url": "https://res.cloudinary.com/dije62fvf/image/upload/v1627254390/Aruba/unnamed_qzpbef.jpg",
        "destinations": ["California Lighthouse", "Butterfly Farm", "Druif Beach"],
        "adultPrice": 75,
        "childPrice": 45,
        "duration": 4,
        "departureTimes": ["8:30 a.m.", "2:00 p.m."]
      },
      {
        "name": "Southern Escape",
        "shortDescription": "Explore the natural beauty of Aruba with this tour of the Southern coastline. This tour takes you to many natural features and includes swimming and snorkeling in the Natural Pool. ",
        "longDescription": "Not only do you visit the Natural Pool in this tour, but you will also experience the Quadirikiri Cave, and Baby Beach, a true Caribbean paradise. This gorgeous sandy expanse is perfect for families with small children. Lunch is also included in your package, and don't forget swimwear!  ",
        "url": "https://res.cloudinary.com/dije62fvf/image/upload/v1627254390/Aruba/0ww6q120006p9l0tt9B3F_vza9zx.jpg",
        "destinations": ["Natural Pool", "Quadirikiri Cave", "Baby Beach"],
        "adultPrice": 75,
        "childPrice": 45,
        "duration": 4,
        "departureTimes": ["8:30 a.m.", "2:00 p.m."]
      },
      {
        "name": "Eastern Escape",
        "shortDescription": "If you are interested in a slightly shorter, but just as exciting experience, the Eastern Escape tour package is for you.",
        "longDescription": "In this tour, you will visit the Ayo Rock Formations, the Bushiribana Ruins, and Natural Bridge. Snorkeling opportunities are also included in this package, weather permitting, so don't forget your swimwear. As with the other tours, lunch will also be included. Enjoy the natural beauty and history of Aruba with this budget friendly package! ",
        "url": "https://res.cloudinary.com/dije62fvf/image/upload/v1627254391/Aruba/66_r6pt8n.jpg",
        "destinations": ["Ayo Rock Formations", "Bushiribana Ruins", "Natural Bridge"],
        "adultPrice": 55,
        "childPrice": 35,
        "duration": 3,
        "departureTimes": ["8:30 a.m.", "2:00 p.m."]
      }
    ]
    );
    
    await Product.deleteMany({});

    const products = await Product.insertMany(
      [
        {
          "name": "Northern, Adult",
          "price": 75,
          "tourPackage": tourPackage[0]._id, 
        },
        {
          "name": "Northern, Child",
          "price": 45,
          "tourPackage": tourPackage[0]._id, 
        },
        {
          "name": "Southern, Adult",
          "price": 75,
          "tourPackage": tourPackage[1]._id,  
        },
        {
          "name": "Southern, Child",
          "price": 45,
          "tourPackage": tourPackage[1]._id, 
        },
        {
          "name": "Eastern, Adult",
          "price": 55,
          "tourPackage": tourPackage[2]._id,  
        },
        {
          "name": "Eastern, Child",
          "price": 35,
          "tourPackage": tourPackage[2]._id, 
        }  
      ]
    );
    
    await Review.deleteMany({});
    await Review.create(reviewSeeds);
    
    await User.deleteMany({});

    await User.create({
      username: "Pam Holt",
      email: 'pamela@testmail.com',
      password: 'password12345',
      imageJpg: `https://res.cloudinary.com/dije62fvf/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1627429062/Aruba/Pam_qpgyic.jpg`,
      orders: [
        {
          products: [products[0]._id, products[0]._id, products[1]._id]
        }
      ], 
      review: 
        {
          comment: `I knew I wanted to see as much as Aruba as I could, specifically the natural pool. What I didn't expect was the experience I had. Highly recommend this company!`
        }
    });
  
    await User.create({
     username: "elijah",
      email: 'eholt@testmail.com',
      password: 'password12345', 
      imageJpg: `https://res.cloudinary.com/dije62fvf/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo[…]_red,b_rgb:262c35/v1627429159/Aruba/elijah-image_lpcq6o.jpg`,
      review: 
        {
          comment: `Truly a great adventure. I never knew the desert can be so beautiful. The tour took us to the north side cliffs with big waves that were huge. After that we went to the caves and the natural pedicure pool that was an experience!! Finally we visited the natural pool it was so amazing with all the fish trapped from the waves crashing over the walls.`
        }

    });
  
    console.log('users seeded');

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});


