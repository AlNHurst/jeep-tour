const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const {
  User,
  TourPackage,
  Review,
  Product,
  Order,
  Reservation
} = require("../models");
const stripe = require("stripe")(process.env.STRIPE_SK);

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    getProducts: async (parent, { tourPackage }) => {
      const params = {};
      if (tourPackage) {
        params.tourPackage = tourPackage;
      }
      return await Product.find(params);
    },
    products: async () => {
      return Product.find().populate("tourPackage");
    },

    product: async (_, args) => {
      return Product.findOne({ _id: args.id });
    },
    tourReviews: async () => {
      return Review.find();
    },
    tourPackages: async () => {
      return TourPackage.find();
    },
    tourPackage: async (_, args) => {
      return TourPackage.findOne({ _id: args.id });
    },
    orders: async () => {
      return Order.find();
    },
    getOrder: async (_, args) => {
      return Order.findOne({ _id: args.id });
    },
    order: async (_, args, context) => {
      if (context.user) {
        const user = await User.findOne(context.user._id).populate({
          path: "orders.products",
        });
        return user.orders.id(_id, name);
      }
      throw new AuthenticationError("Not logged in");
    },
    reservations: async () => {
      return Reservation.find();
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products").execPopulate();

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },

  Mutation: {
    addReservation: async (_, { name, phone, email, date, time }) => {
      const reservation = await Reservation.create({
        name,
        phone,
        email,
        date,
        time,
      });
      return reservation;
    },
    addReview: async (_, { name, comment, rating }, context) => {
      const review = await Review.create({
        name,
        comment, rating
      });
      if (context.user){
        const newReview = new Review ({ review });
      await User.findByIdAndUpdate(context.user._id, {
        $push: { newReviews: newReview },
      })};
      return review;
    },

    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
