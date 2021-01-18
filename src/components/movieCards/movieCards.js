import React from "react"
import moment from "moment"
import Screen from "./screen/screen"
/**
 * 
 * @param {*} param0 
 * [
  {
    "edges": [
      {
        "node": {
          "id": "Screens_5f2a706b6451d500179088a0",
          "createdAt": "2020-08-05T08:40:11.775Z",
          "movie": {
            "id": "5f2a70f16451d500179088a7",
            "movieName": "Back to the future",
            "rating": "PG",
            "moviePoster": {
              "publicURL": "/static/31b81a3783624f0bf699a4208b235b2c/ea0909ce1720b4bac74e34730da95e58.jpg"
            }
          },
          "screenTime": "21:15:00.000",
          "screenNumber": 1,
          "screenDate": "2021-01-17"
        }
      },
      {
        "node": {
          "id": "Screens_5f2a70986451d500179088a2",
          "createdAt": "2020-08-05T08:40:56.183Z",
          "movie": {
            "id": "5f2a71466451d500179088b4",
            "movieName": "Austin Powers",
            "rating": "G",
            "moviePoster": {
              "publicURL": "/static/e83979d5378a82e61b6049ae4195b808/85cb3c759b70dcffe4cffd29c6cf823a.jpg"
            }
          },
          "screenTime": "21:40:00.000",
          "screenNumber": 3,
          "screenDate": "2021-01-17"
        }
      }
    ],
    "fieldValue": "2021-01-17"
  }
]
 */
const MovieCards = ({ screens }) => {
  return (
    <div>
      {screens.map(date => {
        let displayDate = moment(date.fieldValue, "YYYY-MM-DD")
          .toLocaleString()
          .substr(0, 15)

        /**
         * * For each distinct date, group the movies by which screenNumber they are being shown on
         */
        let groups = {}
        for (let el of date.edges) {
          if (groups[el.node.screenNumber] !== undefined) {
            groups[el.node.screenNumber] = [
              ...groups[el.node.screenNumber],
              el.node,
            ]
          } else {
            groups[el.node.screenNumber] = [el.node]
          }
        }
        return (
          <div>
            <p className="font-bold sm:text-2xl md:text-4xl text-center text-gray-900">
              {displayDate}
            </p>
            {Object.entries(groups).map(el => {
              const screenNumber = el[0]
              return (
                <div key={screens._id}>
                  <p className="font-bold text-3xl text-center text-gray-900">
                    Screen {screenNumber}
                  </p>
                  <Screen screen={el[1]} />
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
export default MovieCards
