import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const Prices = ({ data }) => {
  const prices = data.allStrapiPrices.edges[0].node
  return (
    <Layout>
      <div className="w-48 mx-auto mt-20">
        <div className=" text-center text-3xl font-bold">Prices</div>
        <div className="grid grid-cols-2 gap-x-8 pl-6 font-thin">
          <div>Infant</div>
          <div>{prices.infant}</div>
          <div>Child</div>
          <div>${prices.child}</div>
          <div>Adult</div>
          <div>${prices.adult}</div>
          <div>Senior</div>
          <div>${prices.senior}</div>
          <div>Family</div>
          <div>${prices.family}</div>
        </div>
      </div>
    </Layout>
  )
}
export default Prices

export const query = graphql`
  query prices {
    allStrapiPrices {
      edges {
        node {
          id
          adult
          child
          senior
          promotionName
          family
          strapiId
          infant
        }
      }
    }
  }
`
