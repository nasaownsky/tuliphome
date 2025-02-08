import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Card from "../components/card/card"

const TulipsPage = () => {
  const { allContentfulTulip } = useStaticQuery(graphql`
    query {
      allContentfulTulip(sort: { fields: [title], order: ASC }) {
        nodes {
          amount
          title
          sort
          color
          image {
            gatsbyImageData(placeholder: TRACED_SVG, quality: 100)
            file {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Тюльпаны" />
      <Layout>
        <Card tulips={allContentfulTulip.nodes} />
      </Layout>
    </>
  )
}

export default TulipsPage
