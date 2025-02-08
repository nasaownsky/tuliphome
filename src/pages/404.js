import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <>
    <SEO title="404" />
    <Layout>
      <h1>404: Такой страницы не существует</h1>
    </Layout>
  </>
)

export default NotFoundPage
