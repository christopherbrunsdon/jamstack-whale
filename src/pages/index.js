import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import whaleGIF from "../images/gifs/whales.gif"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Adopt a Whale</h1>
    <p>Whales are our friends.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={whaleGIF} alt="Picture of Whale from BBC America" />
    </div>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
