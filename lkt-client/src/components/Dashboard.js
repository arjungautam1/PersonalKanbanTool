import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateButton from "./Project/CreateButton";

class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* Start DashBoard component*/}
        <div className="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 text-center">Projects</h1>
                <br />

                <CreateButton />

                <br />
                <hr />

                <ProjectItem />
              </div>
            </div>
          </div>
        </div>

        {/*End of Dashboard Component*/}
      </div>
    );
  }
}

export default Dashboard;
