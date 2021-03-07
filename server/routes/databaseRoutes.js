const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();


// handles requests to login
router.post('/login', 
  userController.checkUser,
  userController.addUser,
  (req, res) => {
    return res.status(200).json(res.locals.user).redirect('/homepage-url');
  }
);

// handles requests to get all users
router.get('/users', 
  userController.getAllUsers,
  (req, res) => {
    return res.status(200).json(res.locals.allUsers);
  }
);

// handles requests to get all matches
router.get('/matches',
  userController.getMatches,
  (req, res) => {
    return res.status(200).json(res.locals.matches);
  }
);

module.exports = router;