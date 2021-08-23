import * as React from "react";
import PropTypes from "prop-types";

import Header from "./../Header";

const Layout = ({ children }) => {
  return (
    <main>
      <Header siteTitle={"Gatsby Flax demo"} />
      <div>
        <main>{children}</main>
        <footer>{new Date().getFullYear()}</footer>
      </div>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
