import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { HeaderElement } from "./elements";
import { Heading } from "@pubsweet/ui";

const Header = ({ siteTitle = "Gatsby flax demo", pageTitle = "" }) => (
  <HeaderElement>
    <div>
      <Heading level={1}>
        <Link to="/">{siteTitle || "Gatsby Flax/Kotahi demo"}</Link>
        {": "}
        {pageTitle}
      </Heading>
      <Link to={`/about`}>About</Link>
    </div>
  </HeaderElement>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
