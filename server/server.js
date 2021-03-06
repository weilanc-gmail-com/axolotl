const express = require("express");
const path = require("path");
require("dotenv").config()
const app = express();
const PORT = 3000;

app.use("/build", express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

//fyi stored in .env locals to keep secret had to install dotenv, and write in gitgnore
const clientId = process.env.GH_CLIENT_ID
const clientSecret = process.env.GH_CLIENT_SECRET
// const verifyUserUrl= "https://github.com/login/device/code"
// app.post(verifyUserUrl,{
//   client_id: 5c3312c7f96f4983b9c7,
// })
console.log({clientId,clientSecret}, "does this work")

app.get("/login", (req,res)=>{
  const url ="https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=http://localhost:8080/login/user/home"
  res.redirect(url)
})
async function getAccessToken(code){
  const res = fetch('  https://github.com/login/oauth/access_token ',{
    headers:{
      "content-type": "application/json"
    }
    body: JSON.stringify({
      clientId, clientSecret, code
    })
  })
const data = await res.text()
const params= new URLSearchParams(data)
return params.get('access_token')
}
app.get('/user/home', (req,res)=>{
  const code = req.query.code
})

//exchange token for access token
app.post()
// app.get(''),(req,res,next)=>{
//   const { query }= req
//   const ( code )= code

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
