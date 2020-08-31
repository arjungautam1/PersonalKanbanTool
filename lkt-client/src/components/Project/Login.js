import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div>
                <Link to={"/login"} className="nav-link" href="login.html">
                    Login
                </Link>
            </div>
        );
    }
}

export default Login;