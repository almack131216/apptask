import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteData from "./Assets/api/data.json";
import Backdrop from "./Components/Navigation/Backdrop/Backdrop";
import Toolbar from "./Components/Navigation/Toolbar/Toolbar";
import SideDrawer from "./Components/Navigation/SideDrawer/SideDrawer";
import GenericPage from "./Pages/GenericPage/GenericPage";
import Catalogue from "./Pages/Catalogue/Catalogue";
import ItemDetail from "./Pages/CatalogueItem/ItemDetail";

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

    const pageHome = this.state.data.navigation[0];
    const pageAbout = this.state.data.navigation[1];
    const pageCatalogue = this.state.data.navigation[2];

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
            <Switch>
              <Route exact path={pageHome.url}>
                <GenericPage title={pageHome.title} body={pageHome.body} />
              </Route>
              <Route path={pageAbout.url}>
                <GenericPage title={pageAbout.title} body={pageAbout.body} />
              </Route>
              <Route exact path="/dogs" component={Catalogue} />
              <Route path="/dogs/:name" component={ItemDetail} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
