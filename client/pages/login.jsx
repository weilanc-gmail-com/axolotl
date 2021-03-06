import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
  /* React hook

class login extends Component(){
    render(){
        return(
            <div>
             <h2>login page up??? Sign in Below here with GitHub</h2>
      {/* <a href='https://github.com/login/oauth/authorize'><a/>  */}
        
        {/* <Route path="login/user/github">
        
        
        </Route> */}
        </div>
        )
    }
}

//ET https://github.com/login/oauth/authorize
export default login



/*
authenticate as github app
{
    id:
    installationId:
    type:
    privateKey:
}

*/
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

   

  return <button>Log in with git </button>;
};

export default withRouter(Login);
