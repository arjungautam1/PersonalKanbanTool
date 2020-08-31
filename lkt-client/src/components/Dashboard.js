import React, {Component} from 'react';
import ProjectItem from "./Project/ProjectItem";

class Dashboard extends Component {
    render() {
        return (
            <div>
                 <h1 className={"alert alert-danger"}>Welcome to the Hotel California dashboard.</h1>
                <ProjectItem/>
            </div>
        );
    }
}

export default Dashboard;