import React from "react";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  const navLinks = props.navigation.map((link, index) => {
    return link.navSide ? (
      <li key={index}>
        <a
          onClick={props.clicked}
          href={link.url}
          title={"Link to " + link.title}
        >
          {link.title}
        </a>
      </li>
    ) : null;
  });

  return (
    <nav className={drawerClasses}>
      <ul>{navLinks}</ul>
    </nav>
  );
};

export default sideDrawer;
