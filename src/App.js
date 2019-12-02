import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteData from "./Assets/api/data.json";
import Backdrop from "./Components/Navigation/Backdrop/Backdrop";
import Toolbar from "./Components/Navigation/Toolbar/Toolbar";
import SideDrawer from "./Components/Navigation/SideDrawer/SideDrawer";
import SideDrawerToggle from "./Components/Navigation/SideDrawer/DrawerToggleButton";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Catalogue from "./Pages/Catalogue/Catalogue";

class App extends Component {
  constructor(props) {
    super(props);
    document.title = this.props.appTitle;
    // console.log("[App.js] constructor");

    this.state = {
      data: SiteData,
      sideDrawerOpen: false
    };
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  closeSideDrawerHandler = () => {
    // console.log("[App.tsx] closeSideDrawerHandler");
    this.backdropClickHandler();
  };

  render() {
    // console.log("[App.js] render... ");

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Router>
        {" "}
        <div className="App">
          <Toolbar
            brandName={this.state.data.brandName}
            navigation={this.state.data.navigation}
            drawerClickHandler={this.drawerToggleClickHandler}
            sideDrawerOpen={this.state.sideDrawerOpen}
          />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            navigation={this.state.data.navigation}
            clicked={this.closeSideDrawerHandler}
          />
          {backdrop}
          <main>
            <h1>App</h1>
            <Switch>
              <Route
                path={this.state.data.navigation[0].url}
                exact
                component={Home}
              />
              <Route
                path={this.state.data.navigation[1].url}
                component={About}
              />
              <Route
                path={this.state.data.navigation[2].url}
                component={Catalogue}
              />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
