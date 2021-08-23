import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";

const ArticlePage = ({ data, pageContext }) => (
  <Layout>
    <h2>Front page</h2>
  </Layout>
);

export default ArticlePage;
