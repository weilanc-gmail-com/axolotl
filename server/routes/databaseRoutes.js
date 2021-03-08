const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// handles requests to login
router.post('/login', 
  userController.checkUser,
  userController.addUser,
  (req, res) => {
    return res.status(200).json(res.locals.user)//.redirect('/homepage-url');
  }
);

// handles get requests for user profile
router.get('/profile', 
  userController.checkProfile,
  (req, res) => {
    return res.status(200).json(res.locals.profile)//.redirect('/matches-url');
  }
);

// handles post request to create/edit user profile
router.post('/new-profile',
  userController.addProfile,
  (req, res) => {
    return res.status(200).json(res.locals.profile)//.redirect('/matches-url');
  }
);

// handles requests to get all users
router.get('/users', 
  userController.getAllUsers,
  (req, res) => {
    return res.status(200).json(res.locals.allUsers);
  }
);

// handles post requests to matches table
router.post('/potential-matches',
  userController.addPotential,
  (req, res) => {
    res.status(200).json();
  }
);

// handles requests to get all matches
router.get('/matches',
  userController.filterMatches,
  userController.addMatches,
  userController.deleteMatches,
  (req, res) => {
    console.log(res.locals.matches, "all matches?????")
    return res.status(200).json(res.locals.matches);
  }
);

module.exports = router;