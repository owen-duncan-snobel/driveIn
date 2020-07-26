import React from 'react';


function MovieCards(props) {
    const screens = props.screens;
    return (
        <div>
            {screens.map(movie => {

                let movies = screens.filter((el) => el.screenNumber === movie.screenNumber);

                return (
                    <div className="h-screen w-screen" >

                        <div className="max-w-5xl mx-auto p-10 space-y-5">
                            <h1>{movie.screenNumber}</h1>
                            <div className="grid sm:grid-cols-2 gap-5">

                                {movies.map(movie => {
                                    return (
                                        <div className="grid max-w-sm rounded overflow-hidden shadow-lg m-20">

                                            <img className="w-full" src={movie.movie.moviePoster}></img>
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
                        </div>
                    </div >
                )
            })}
        </div>
    )
} export default MovieCards;