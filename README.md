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


   You can use the useState() hook for each piece of state you want to keep track of.
    e.g.
    
    const [count, setCount] = useState(5);
    const [userId, setUserId] = useState(userId);
    const [matches, setMatches] = useState(matches);

    One last thing is all instances of useState MUST be called in the same order on every render
    this means you cannot use the hook inside of functions or if statements. 
    You should also put your useState hooks at the very top of your component.
    Putting the setState function inside of conditons is fine, 
    you just cant initialize the values in a different order on render.
  