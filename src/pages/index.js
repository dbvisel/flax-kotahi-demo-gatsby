import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";

const IndexPage = () => {
  const posts = useStaticQuery(graphql`
    {
      wpdemo {
        posts {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }
    }
  `).wpdemo.posts.edges.map((x) => x.node);
  return (
    <Layout title="main index">
      <h2>Articles in the index:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`article/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          alert(
            "This isn't hooked up yet! This should fire a webhook to rebuild the site."
          );
        }}
      >
        Rebuild?
      </button>
    </Layout>
  );
};

export default IndexPage;
