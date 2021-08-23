import * as React from "react";
import Layout from "../components/Layout";
import Article from "../components/Article";

const ArticlePage = ({ data, pageContext }) => (
  <Layout title={pageContext.title}>
    <Article title={pageContext.title} content={pageContext.content} />
  </Layout>
);

export default ArticlePage;
