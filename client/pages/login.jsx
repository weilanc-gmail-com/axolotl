import React, { Component } from 'react';
import { Switch, Route, Link} from "react-router-dom";
//client ID 5c3312c7f96f4983b9c7
// client secret 333853046c94fbc7a879684589f370475146357e


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