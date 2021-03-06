const express = require("express");
const path = require("path");
require("dotenv").config()
const fetch = require('node-fetch')
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use("/build", express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

//fyi stored in .env locals to keep secret had to install dotenv, and write in gitgnore
const client_id = process.env.GH_CLIENT_ID

const client_secret = process.env.GH_CLIENT_SECRET



//redirect to request Github acess this should probably be on client side
app.get("/login", (req,res)=>{
  const url =`https://github.com/login/oauth/authorize?client_id=${client_id}`
  res.redirect(url)

})



// //where github autoredirects giving us code
app.get('/user/home', (req,res)=>{
  const body ={
    client_id:client_id,
    client_secret:client_secret,
    code: req.query.code
  }

 
console.log(req.query.code)
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
      console.log(params);
    })

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



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.export = app;
