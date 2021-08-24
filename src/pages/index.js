import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import { Button, Heading, CenteredColumn, DateParser } from "@pubsweet/ui";

const IndexPage = () => {
  const fireWebhook = () => {
    fetch("https://api.netlify.com/build_hooks/61234a4e2d8c8275e0804bf5")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        alert(
          `Webhook fired to rebuild the site. Here's what Netlify said:\n\n${JSON.stringify(
            myJson
          )}`
        );
      });
  };

  const posts = useStaticQuery(graphql`
    {
      wpdemo {
        posts {
          edges {
            node {
              id
              title
              slug
              date
            }
          }
        }
      }
    }
  `).wpdemo.posts.edges.map((x) => x.node);
  return (
    <Layout title="main index">
      <CenteredColumn>
        <Heading level={2}>Articles in the index:</Heading>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`article/${post.slug}`}>{post.title}</Link>{" "}
              <DateParser timestamp={post.date} dateFormat="DD/M/YYYY">
                {(timestamp, timeAgo) => <span>({timeAgo} ago)</span>}
              </DateParser>
            </li>
          ))}
        </ul>
        <Button
          primary
          color="black"
          background="lightblue"
          size="large"
          onClick={() => {
            fireWebhook();
          }}
        >
          Rebuild?
        </Button>
      </CenteredColumn>
    </Layout>
  );
};

export default IndexPage;
