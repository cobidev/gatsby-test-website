import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  // Fetch GrahpQL data stored on gatsby-config.js
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  // Destructure only the author value
  const { author } = data.site.siteMetadata

  return (
    <footer>
      <p>Created by {author}, © 2019</p>
    </footer>
  )
}

export default Footer
