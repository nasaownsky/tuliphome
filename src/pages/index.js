import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card/card"

const IndexPage = () => {
  const { allContentfulTulip } = useStaticQuery(graphql`
    query {
      allContentfulTulip(sort: { fields: [title], order: ASC }) {
        nodes {
          amount
          title
          sort
          color
          image {
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
      <SEO />
      <Layout cta>
        <div style={{ textAlign: "center" }}>
          <Card tulips={allContentfulTulip.nodes} />
        </div>
        <div id="insta">
          <div className="elfsight-app-76bfc865-ee63-4458-94dc-59f0d464fe3f"></div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
