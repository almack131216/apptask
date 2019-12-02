import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => {
  let classes = [];
  classes.push("toolbar");
  if (props.navigation) {
    classes.push("has-toolbar");
  } else {
    classes.push("no-toolbar");
  }

  if (props.sideDrawerOpen) {
    classes.push("side-drawer-open");
  }

  const navLinks = props.navigation
    ? props.navigation.map((link, index) => {
        return link.navTop ? (
          <li key={index}>
            <a href={link.url} title="Link to {link.title}">
              {link.title}
            </a>
          </li>
        ) : null;
      })
    : null;

  return (
    <header className={classes.join(" ")}>
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton
            click={props.drawerClickHandler}
          ></DrawerToggleButton>
        </div>
        {props.brandName ? (
          <div className="toolbar__logo">
            <a href="/">{props.brandName}</a>
          </div>
        ) : null}
        <div className="spacer" />
        {navLinks ? (
          <div className="toolbar__navigation-items">
            <ul>{navLinks}</ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default toolbar;
