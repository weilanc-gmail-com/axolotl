
// handles incoming requests

const express = require("express");
const path = require("path");

const userController = require('../controllers/userController');

const app = express();
const PORT = 3000;

// parses incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended : true}));


// OAUTH LOGIN REQUEST

// authorized routes

// BOILERPLATE STUFF //

// allows requests to be made in dev mode
app.use("/build", express.static(path.join(__dirname, "../build")));

// serves index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

// catch-all route handler for requests to unknown routes
app.use((req, res) => res.status(404).send('This page does not exist.'))

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown error',
    status: 500,
    message: { err: 'An error occurred' },
  },
  const errorObj = Object.assign({}, defaultErr, err);
  console.log('Error message: ', errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// starts server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});


module.export = app;
