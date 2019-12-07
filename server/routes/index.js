const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');

const router = express.Router();

/**
 * Error handler for async / await functions
 */
const catchErrors = fn => {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  }
};

/**
 * AUTH ROUTES: /api/auth
 */
router.post(
  '/api/auth/signup',
  authController.validateSignup,
  catchErrors(authController.signup)
);
router.post('/api/auth/signin', authController.signin);
router.get('/api/auth/singout', authController.signout);

/**
 * USER ROUTES: /api/users
 */
//router.param('userId', userController.getUserById);

