# axolotl

Client info should be kept in local .env to keep it secret

client secret: 333853046c94fbc7a879684589f370475146357e
client id: 5c3312c7f96f4983b9c7

2 rediredts: 
1. /login/github
2. github callback url http://localhost:8080/login/user/home

scope https://github.com/login/oauth/authorize?
  client_id=...&
  scope=user%20repo_deployment
  %20user:follow
  %20user:email
  %20read:user