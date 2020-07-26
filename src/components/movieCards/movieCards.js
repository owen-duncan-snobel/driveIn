import React from 'react';


function MovieCards(props) {
    const movies = props.movies;
    console.log(props)
    return (
        <div className="h-screen w-screen">
            <div className="max-w-5xl mx-auto p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                    {movies.map(movie => {
                        return (
                            <div className="grid max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src={movie.moviePoster}></img>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{movie.movieName}</div>
                                    <p className="text-gray-700 text-base">
                                        {movie.rating}
                                    </p>
                                </div>
                                <div className="px-6 py-4">
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
} export default MovieCards;