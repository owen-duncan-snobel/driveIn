import React from "react"
import NoSSR from "react-no-ssr"

const Cards = ({ screen, screenTime }) => {
  let movie = screen.movie
  try {
    return (
      <NoSSR>
        <div className="overflow-hidden border rounded-lg mx-auto relative m-2 shadow-xs">
          <img
            className="w-full max-w-sm h-64 object-cover pb-2"
            src={movie.moviePoster.publicURL}
            alt={movie.movieName + " Poster"}
          ></img>
          <div className="flex">
            <div className="mt-24 relative"></div>
            <div className="w-1/2">
              <div className="px-6 py-4 absolute bottom-0">
                <div
                  className="font-bold text-xl mb-2"
                  aria-label={movie.movieName}
                >
                  {movie.movieName}
                </div>
                <p className="text-gray-700 text-base">{screenTime}</p>
                <p className="text-gray-700 text-base">{movie.rating}</p>
              </div>
            </div>

            <div className="w-1/2 pt-10">
              <div className="px-6 py-4 absolute bottom-0">
                <span>
                  <button className="" aria-label="BUY TICKET">
                    BUY TICKETS
                  </button>
                  <button className="" aria-label="TRAILER">
                    TRAILER
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </NoSSR>
    )
  } catch (error) {
    console.log(error)
    return <div></div>
  }
}
export default Cards
