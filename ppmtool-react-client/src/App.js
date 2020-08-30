import React from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css"
// import {Router} from "@material-ui/icons";
import AddProject from "./components/Project/AddProject";
import {BrowserRouter as Router,Route} from "react-router-dom";
function App() {
    return (
        <Router>
        <div className="App">
            <Header/>
            <Route exact path={"/dashboard"} component={Dashboard}/>
           <Route exact path={"/addProject"} component={AddProject}/>
        </div>
        </Router>
    );
}

export default App;
