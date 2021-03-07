
// middleware that makes queries

const e = require('express');
const db = require('../models/userModels');

const userController = {};


// checks the database for the user
userController.checkUser = (req, res, next) => {
  
  const username = [req.body.username];
  // query statement
  const statement = `SELECT username FROM people WHERE username = $1`

  db.query(statement, username, (err, result) => {
    if (err) {
      return next({
        log: 'There was an error with the checkUser query.',
        message: {
          err: 'An error occurred with the checkUser query.'
        }
      });
    } else {
      if (!result.rows.length) { // query returned nothing
        console.log('User does not exist in database. Need to add user to the database.');
        return next();
      } else {
        console.log('User exists in the database. Redirecting to home page.');
        return res.status(200).redirect('/homepage-url');
      }
    }
  });
};

// adds user to the database upon first OAuth
userController.addUser = (req, res, next) => {
  
  // holds user info from github (token and username or something). should come from req.body 
  const userInfo = [`testUser${Math.floor(Math.random() * 100)}`, Math.floor(Math.random() * 100)];  // test data
  // query statement
  const statement = `INSERT INTO people (username, token) VALUES($1, $2)`
  // make query into database

  db.query(statement, userInfo, (err, result) => {
    if (err) {
      return next({
        log: 'There was an error with the addUser query.',
        message: {
          err: 'An error occurred with the addUser query.'
        }
      });
    } else {
      console.log('User was successfully added to the database. Redirecting to home page.');
      return next();
    }
  });

};

// gets all users to display on swipe screen
userController.getAllUsers = (req, res, next) => {

  // query statement
  const statement = `SELECT username, user_profile FROM people`
  
  // make query into database
  db.query(statement, (err, result) => {
    if (err) {
      return next({
        log: 'There was an error with the getAllUsers query.',
        message: {
          err: 'An error occurred with the getAllUsers query.'
        }
      });
    } else {
      res.locals.users = result.rows;
      if (!res.locals.users) {
        return res.status(400).json( {err: 'The query for all users returned nothing.'} );
      } else {
        console.log('Returning all users to the swipe screen.');
        return next();
      };
    };
  });

};

// gets a user's matches to display on matches screen 
userController.getMatches = (req, res, next) => {

  // query statement
  const statement = `SELECT match 
                      FROM people 
                      LEFT JOIN matches 
                      ON people._id = matches._id 
                      WHERE matches._id = people._id`;

  // make query into database
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
        return res.status(400).json( {err: 'The query for all matches returned nothing.'} )
      } else {
        console.log('Returning all matches to the matches screen.');
        return next();
      };
    };
  });

};



module.exports = userController;
