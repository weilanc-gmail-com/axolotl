# axolotl

Client info should be kept in local .env to keep it secret


2 rediredts: 
1. /login/github
2. github callback url http://localhost:8080/login/user/home

scope https://github.com/login/oauth/authorize?
  client_id=...&
  scope=user%20repo_deployment
  %20user:follow
  %20user:email
  %20read:user



  

const [state, setState] = useState(SomeState);

    the two values in the array can be anything they are just variables.
    you are deconstructing like you would do with an object.
    the first value(state) is the value in state.
    the second value(setState) is the function you will call to changeState
    the propper way to do this is with a callback inside that takes in
    'prevState' where State is the name of your current state value (just state in this example)

    TRIVIAL EXAMPLE: 
    const [count, setCount] = useState(5);
    //increment count
    function incrementCount() => {
      setCount(prevCount => prevCount + 1);
      //increments our count in state to 6
    }

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
  