import React from "react"

import "../style/index.css"
import Header from "../components/header"

const Layout = ({ shrink, location, title, children }) => {


  return (
    <div className="app" >
      <Header></Header>
      <main class={`${shrink?"container mx-auto px-4":""}`}>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, FrozenAlex, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </div>
  )
}

export default Layout

