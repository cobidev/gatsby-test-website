import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>I've been work as a dev for 2 years</p>
      <p>
        <Link to="/contact">Want to work with me? React out</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
