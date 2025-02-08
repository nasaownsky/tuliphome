import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Gallery from "../components/gallery"

const GalleryPage = () => {
  return (
    <>
      <SEO title="Галерея" />
      <Layout>
        <Gallery />
      </Layout>
    </>
  )
}

export default GalleryPage
