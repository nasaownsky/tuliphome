/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Cta from "./cta"
import "./layout.scss"

const Layout = ({ children, cta }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="main" className="container">
      <Header
        menu={[
          { title: "Тюльпаны", href: "#tulips" },
          { title: "Галерея", href: "#insta" },
        ]}
      />
      {cta ? <Cta /> : null}
      <main id="tulips">{children}</main>
      <footer>
        Дом тюльпана, Copyright © {new Date().getFullYear()} <br />
        Данный сайт носит исключительно информационный характер и не является
        публичной офертой
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
