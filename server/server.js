
/**
 * ************************************************************************
 *
 * @description IMPORTS AND SERVER SETUP 
 *
 * ************************************************************************
 */

const express = require("express");
const path = require("path");
const fetch = require('node-fetch');  // allows requests to be made in dev mode
const cors = require('cors');
const cookieParser = require('cookie-parser');
require("dotenv").config();

const dbRouter = require('./routes/databaseRoutes');

const app = express();
const PORT = 3000;

// parses incoming request bodies
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

/**
 * ************************************************************************
 *
 * @description OAUTH ROUTES
 *
 * ************************************************************************
 */

app.use('/users', dbRouter);

// OAUTH LOGIN REQUEST

// authorized routes

//fyi stored in .env locals to keep secret had to install dotenv, and write in gitgnore
const client_id = process.env.GH_CLIENT_ID
const client_secret = process.env.GH_CLIENT_SECRET




// app.get('/login/home', (req, res) => {
//   res.status(200).redirect('/login')
// })

//redirect to request Github acess this should probably be on client side
app.get("/login", (req,res)=>{
  const url =`https://github.com/login/oauth/authorize?client_id=${client_id}`
  res.cookie('logging_in');
  res.status(200).json(url);
})



// //where github autoredirects giving us code
app.get('/login/home', (req,res)=>{
  const body ={
    client_id:client_id,
    client_secret:client_secret,
    code: req.query.code
  }
 
console.log('CODE: ', req.query.code)
  //  getAccessToken(code)or
fetch('https://github.com/login/oauth/access_token',{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      client_id: client_id,
      client_secret: client_secret,
      code: req.query.code
    })
  }).then(response => response.text())
    .then(data => new URLSearchParams(data))
    .then(params => {
      console.log('ACCESS_TOKEN: ', params.get('access_token'));
      return res.status(200).json(params.get('access_token'));
    })
    // res.redirect('/home');
    
})






//   if(!code){
//     return res.send({
//       message:"please try again"
//     })
//   }
//   console.log("login redirect?????")
//   req.post(  )
//   .send({

//   })
// }

//https://github.com/settings/connections/applications/:client_id
//client ID 5c3312c7f96f4983b9c7


/**
 * ************************************************************************
 *
 * @description BOILERPLATE ROUTES/MIDDLEWARE
 *
 * ************************************************************************
 */

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
  }
  const errorObj = Object.assign({}, defaultErr, err);
  console.log('Error message: ', errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// starts server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});


module.export = app;
