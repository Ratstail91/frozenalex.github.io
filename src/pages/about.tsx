import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { FaBlender, FaDatabase, FaDocker, FaCss3, FaJs } from "react-icons/fa"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout shrink={true} location={location} title={siteTitle}>
      <h1 className="m-5 text-5xl text-center">About me</h1>
      {/* <div className="bg-aqua">
        <p className="text-md">My name is Alex Uskov I'm a web developer</p>
      </div>
      <h1 className="m-5 text-5xl text-center">Technologies I use:</h1>
      <ul className="text-center">
        <li>JavaScript</li>
        <li>CSS</li>
        <li>Docker</li>
        <li>TypeScript</li>
        <li>SQL</li>
        <li>Blender 3D</li>
      </ul> */}
      <SEO title="About" />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
