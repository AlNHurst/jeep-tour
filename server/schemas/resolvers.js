const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, TourPackage, Review, Product, Order } = require('../models');

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
      throw new AuthenticationError('You need to be logged in!');
    },
    getProducts: async (parent, args) => {
      
      return await Product.find(args).populate('tourPackage');
    },
    products: async () => {
      return Product.find();
    },
    // getproducts: async (_, args) => {
    //   return Product.find({ _id: args.tourPackage }).populate('tourPackage');
    // },
    product: async (_, args) => {
      return Product.findOne({ _id: args.id }).populate('tourPackage');
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
    order: async (_, args, context) => {
      if (context.user) {
        const user = await User.findOne(context.user._id).populate({
          path: 'orders.products',
        });
        return user.orders.id(_id);
      }
      throw new AuthenticationError('Not logged in');
    }
  },

  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  }
};

module.exports = resolvers;
