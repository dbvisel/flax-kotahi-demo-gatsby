const path = require("path");
const pageTemplate = path.resolve("src/templates/article.js");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      wpdemo {
        posts {
          edges {
            node {
              id
              title
              slug
              content
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    return result.data.wpdemo.posts.edges.forEach(({ node }) => {
      createPage({
        path: `article/${node.slug}`,
        id: node.id,
        component: pageTemplate,
        context: {
          id: node.id,
          title: node.title,
          content: node.content,
          slug: node.slug,
        },
      });
    });
  });
};
