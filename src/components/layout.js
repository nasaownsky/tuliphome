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
    <div className="container">
      <Header menu={["Главная", "Тюльпаны", "Доставка", "Контакты"]} />
      {cta ? <Cta /> : null}
      <main>{children}</main>
      <footer>
        Наш тюльпан, Copyright © {new Date().getFullYear()} <br />
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
