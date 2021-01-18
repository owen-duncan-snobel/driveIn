import React from "react"
import { graphql } from "gatsby"
import moment from "moment"
import MovieCards from "../components/movieCards/movieCards"
import Layout from "../components/layout"

const NowPlaying = ({ data }) => {
  try {
    const currentDate = moment().format("YYYY-MM-DD")
    const screens = data.allStrapiScreens.group.filter(
      el => el.fieldValue === currentDate
    )
    return (
      <Layout>
        <MovieCards screens={screens} />
      </Layout>
    )
  } catch (error) {
    console.log(error)
    return <div></div>
  }
}
export default NowPlaying
export const query = graphql`
  query nowPlaying {
    allStrapiScreens(limit: 100, sort: { fields: screenTime, order: ASC }) {
      group(field: screenDate) {
        edges {
          node {
            id
            createdAt
            movie {
              id
              movieName
              rating
              moviePoster {
                publicURL
              }
            }
            screenTime
            screenNumber
            screenDate
          }
        }
        fieldValue
      }
    }
  }
`
