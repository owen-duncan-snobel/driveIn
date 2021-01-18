import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const TheatreInfo = ({ data }) => {
  const theatreInfo = data.allStrapiTheatres.edges

  return (
    <Layout>
      <div className="w-64 mx-auto mt-20">
        <div className=" text-center text-3xl font-bold">Theatre Info</div>
        <div>
          {theatreInfo.map(el => {
            const theatre = el.node
            return (
              <div>
                <address className="m-4 font-thin" key={theatre.id}>
                  <div>{theatre.Address}</div>
                  <div>{theatre.City}</div>
                  <a href={"tel:" + theatre.PhoneNumber}>
                    {theatre.PhoneNumber}
                  </a>
                  <div>{theatre.Province}</div>
                </address>
                <hr></hr>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
export default TheatreInfo
export const query = graphql`
  query theatreInfo {
    allStrapiTheatres {
      edges {
        node {
          id
          Address
          City
          PhoneNumber
          Province
          strapiId
        }
      }
    }
  }
`
