import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout.jsx"
import SEO from "../components/seo"

class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: "",
        message: "",
      },
    }
  }
  render() {
    let { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Contact" />
        {/* Hero */}
        <h1 className="m-5 text-2xl text-center">Contact form</h1>
        <form
          action="https://frozen-feedback.herokuapp.com"
          method="POST"
          className="max-w-md mx-auto"
          enctype="multipart/form-data"
          onSubmit={this.handleSubmit.bind(this)}
        >
          {/* Name */}
          <div class="mb-4">
            <label
              class="block text-gray-700 text-md text-center font-bold mb-2"
              for="name"
            >
              Name and Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              value={this.state.form.name}
              onChange={this.handleChange.bind(this)}
              type="text"
              placeholder="Name/Email"
              name="name"
              maxLength="200"
              required
            />
          </div>
          {/* Message */}
          <div class="mb-4">
            <label
              class="block text-gray-700  text-md text-center font-bold mb-2"
              for="message"
            >
              Message
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y"
              id="message"
              placeholder="Message"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.message}
              name="message"
              rows="5"
              maxLength="3896"
              required
            />
          </div>
          {/* Filename */}
          <div class="mb-4">
            <label
              class="block text-gray-700 text-md text-center font-bold mb-2"
              for="file"
            >
              File
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="file"
              type="file"
              placeholder="File"
              name="file"
            />
          </div>
          <div class="mb-4 text-center">
            <input
              className="bg-teal-500 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider disabled:opacity-75 "
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </Layout>
    )
  }
  handleChange(e) {
    this.setState({ form: { ...this.state.form, [e.target.id]: e.target.value } })
  }
  validate() {
    return (this.state.form.message != "") & (this.state.form.name != "")
  }
  async handleSubmit(e) {
    e.preventDefault()
    if (!this.validate()) {
      alert("Invalid input. Check your name and message!")
      return
    }
    let data = new FormData()
    data.append("name", this.state.form.name)
    data.append("message", this.state.form.message)
    let file = document.getElementById("file").files[0]
    if (file) {
      data.append("file", document.getElementById("file").files[0])
    }

    try {
      let result = await fetch("https://frozen-feedback.herokuapp.com/api", {
        method: "POST",
        body: data,
      })
      let json = await result.json()
      if (json.type === "success") {
        alert("Your message has been delivered! \nThis site is still under construction")
      } else {
        alert(
          "Something went wrong! Contact me on social media instead \nThis site is still under construction"
        )
      }
      console.log(json)
    } catch (e) {
      console.log(e)
      alert(
        "Something went wrong! Contact me on social media instead \nThis site is still under construction"
      )
    }
  }
}

export default ContactPage

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
