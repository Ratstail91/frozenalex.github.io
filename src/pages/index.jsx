import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout.jsx"
import SEO from "../components/seo"

const SiteIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Alex Blog" />
      {/* Hero */}
      <div
        className="py-20"
        style={{ background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)" }}
      >
        <div className="container mx-auto px-6">
          <h2 class="text-4xl font-bold mb-2 text-white">Hi, my name is Alex</h2>
          <h3 class="text-2xl mb-8 text-gray-200">
            I make responsive websites with React and Vanilla JavaScript
          </h3>
          <a
            href="https://frozen-feedback.herokuapp.com"
            class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
          >
            Contact me
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default SiteIndex

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
