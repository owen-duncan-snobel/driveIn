import React from 'react';


function MovieCards(props) {
    const screens = props.screens;
    return (
        <div>
            {screens.map(movie => {
                let movies = screens.filter((el) => el.screenNumber === movie.screenNumber);

                return (
                    <div className="flex flex-wrap overflow-hidden lg:w-1/2 mx-auto">
                        {movies.map(movie => {
                            return (
                                <div className="w-full overflow-hidden sm:w-1/2 mx-auto border">
                                    <img className="w-full max-w-sm object-cover mx-auto" src={movie.movie.moviePoster}></img>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{movie.movie.movieName}</div>
                                        <p className="text-gray-700 text-base">
                                            {movie.screenTime}
                                        </p>
                                        <p className="text-gray-700 text-base">
                                            {movie.movie.rating}
                                        </p>
                                    </div>
                                    <div className="px-6 py-4">
                                        <span>
                                            <button>BUY TICKET</button>
                                            <button>TRAILER</button>
                                        </span>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
} export default MovieCards;