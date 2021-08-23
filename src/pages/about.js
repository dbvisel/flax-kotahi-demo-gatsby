import * as React from "react";
import Layout from "./../components/Layout";
import { Link } from "gatsby";

const AboutPage = () => (
  <Layout title="about this site">
    <h2>About this site</h2>
    <div>
      <p>
        This is a quick version of the site made in Gatsby. It's pulling content
        from a WordPress GraphQL endpoint. It makes a page for each article and
        dumps the HTML into a div. There's no markup processing happening –
        what's coming from WordPress is being dumped straight into React.
      </p>
      <p>
        Note that <Link to={`/article/online-encyclopedias`}>here</Link> images
        are being included – they're hotlinking to the original WordPress
        install.
      </p>
      <p>
        One big benefit of using React is that we could use the Pubsweet
        component libray to make sure that content appears the same on the
        Kotahi side and on the Flax side.
      </p>
      <p>
        If you click the button on the front page, Netlify will rebuild the
        content on this site (builds take about a minute). Note, however, that
        this probably won't do anything visible – the content on the CMS isn't
        changing.
      </p>
    </div>
  </Layout>
);

export default AboutPage;
