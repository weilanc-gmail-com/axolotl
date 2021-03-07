
// middleware that makes queries

const e = require('express');
const db = require('../models/userModels');

const userController = {};


// checks the database for the user
userController.checkUser = (req, res, next) => {
  
  const username = [req.body.username]; // save Github username on req.body
  const statement = `SELECT _id, username, user_info FROM people WHERE username = $1`

  db.query(statement, username, (err, result) => {
    if (err) {
      return next({
        log: 'There was an error with the checkUser query.',
        message: {
          err: 'An error occurred with the checkUser query.'
        }
      });
    } else {
      if (!result.rows.length) { // if query returned nothing
        console.log('User does not exist in database. Need to add user to the database.');
        return next();
      } else {
        res.locals.user = result.rows[0]; 
        console.log('User exists in the database. Redirecting to home page.');
        return res.status(200).json(res.locals.user).redirect('/homepage-url'); // is this allowed??? reroutes to home page somehow 
      }
    }
  });
};

// adds user to the database upon first OAuth
userController.addUser = (req, res, next) => {
  
  // holds user info from github (token and username or something). should come from req.body 
  // mock data for now 
  const userInfo = [`testUser${Math.floor(Math.random() * 100)}`, Math.floor(Math.random() * 100)];
  const statement = `INSERT INTO people (username, token) VALUES($1, $2) RETURNING *`;
  
  db.query(statement, userInfo, (err, result) => {
    if (err) {
      return next({
        log: 'There was an error with the addUser query.',
        message: {
          err: 'An error occurred with the addUser query.'
        }
      });
    } else {
      res.locals.user = result.rows[0];
      console.log('User was successfully added to the database. Redirecting to home page.');
      return next();
    }
  });

};

// adds user info to the database
userController.addInfo = (req, res, next) => {

};

// gets all users to display on swipe screen
userController.getAllUsers = (req, res, next) => {

  const statement = `SELECT _id, username, user_profile FROM people`;
  
  db.query(statement, (err, result) => {
    if (err) {
      return next({
        log: 'There was an error with the getAllUsers query.',
        message: {
          err: 'An error occurred with the getAllUsers query.'
        }
      });
    } else {
      res.locals.allUsers = result.rows;
      if (!res.locals.allUsers) {
        return res.status(400).json( {err: 'The query for all users returned nothing.'} );
      } else {
        console.log('Returning all users to the swipe screen.');
        return next();
      };
    };
  });

};

// inserts pair into potentials table
userController.addPotential = (req, res, next) => {

  const potentialPair = [req.body.user, req.body.potentialMatch]; // req.body.user is people._id of user, req.body.potentialMatch is people._id of potential match
  const statement = `INSERT INTO matches (_id, match) VALUES ($1, $2)`;

  db.query(statement, potentialPair, (err, result) => {
    if (err) {
      return next({
        log: 'There was an error with the addPotential query.',
        message: {
          err: 'An error occurred with the addPotential query.'
        }
      });
    } else {
      console.log(`Potential pair was successfully added to 'Potentials' table.`);
      return res.status(200);
    }
  })

};

// gets a user's matches to display on matches screen 
userController.getMatches = (req, res, next) => {

  const statement = `SELECT match 
                      FROM people 
                      LEFT JOIN matches 
                      ON people._id = matches._id 
                      WHERE matches._id = people._id`;

  db.query(statement, (err, result) => {
    if (err) {
      return next({
        log: 'There was an error with the getMatches query.',
        message: {
          err: 'An error occurred with the getMatches query.'
        }
      });
    } else {
      res.locals.matches = result.rows;
      if (!res.locals.matches) {
        return res.status(400).json( {err: 'The query for all matches returned nothing.'} );
      } else {
        console.log('Returning all matches to the matches screen.');
        return next();
      };
    };
  });

};




module.exports = userController;
