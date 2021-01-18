import React from "react"
import moment from "moment"
import Cards from "../cards/cards"

const Screen = ({ screen }) => {
  // * screens index 1 refers to the movies on the selected screen
  return (
    <div className="flex flex-wrap overflow-hidden">
      <div className="block sm:flex sm:flex-wrap  overflow-hidden mx-auto gap-2">
        {screen.map(movie => {
          let screenTime = movie.screenTime
          /**
           * * Convert the time to the standard 12 hour clock format
           */
          screenTime = moment(screenTime, "hh:mm:ss.SSS").format("h:mm a")

          return <Cards screen={movie} screenTime={screenTime} key={movie.id} />
        })}
      </div>
    </div>
  )
}
export default Screen
