const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: 'Post content is required'
    },
    image: {
      type: String
    },
    likes: [{
      type: ObjectId,
      ref: 'User'
    }],
    comments: [
      {
        text: String,
        createdAt: {
          type: Date,
          default: Date.now
        },
        postedBy: {
          type: ObjectId,
          ref: 'User'
        }
      }
    ],
    postedBy: {
      type: ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  /** don't wat to create our indices every time (nice for development,
   * but can result in a performance hit) */
  { autoIndex: false }
);

/** Kind of like a middleware function after creating our schema (since we have access to next) */
/** Must be a function declaration (not an arrow function), because we want to use 'this' to reference our schema */