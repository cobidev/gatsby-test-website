import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <h1>Blog</h1>
      {edges.map(edge => (
        <article>
          <h2>{edge.node.frontmatter.title}</h2>
          <p>{edge.node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  )
}

export default BlogPage
