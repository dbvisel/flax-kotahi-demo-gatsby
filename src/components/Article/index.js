import * as React from "react";
import PropTypes from "prop-types";
import { ArticleElement } from "./elements";

const Article = ({ title, content }) => (
  <ArticleElement>
    <h2>{title}</h2>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </ArticleElement>
);
export default Article;

Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
