import * as React from "react";
import PropTypes from "prop-types";
import Header from "./../Header";
import { Wrapper } from "./elements";

const Layout = ({ children, title = "" }) => {
  return (
    <Wrapper>
      <Header pageTitle={title} />
      <div>
        <main>{children}</main>
        <footer>footer content goes here! {new Date().getFullYear()}</footer>
      </div>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
