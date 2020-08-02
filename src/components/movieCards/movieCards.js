import React from 'react';
import moment from 'moment';

function MovieCards(props) {
    const screens = props.screens;

    try {
        return (
            <div>
                {/** For Every Screen Filter by screen each movie at the specific screen */}
                {screens.map(movie => {

                    // * Filter so that the screenNumber is === to the movieScreen number 
                    let movies = screens.filter((screen) => screen.screenNumber === movie.screenNumber);
                    // * Sort so that the times for the screen are in ascending order based on the times.
                    movies.sort((a, b) => a.screenTime > b.screenTime);
                    return (
                        <div>
                            <p className="font-bold text-5xl text-center text-gray-900">Screen {movie.screenNumber}</p>
                            <div className="flex flex-wrap overflow-hidden">
                                <div className="block sm:flex sm:flex-wrap  overflow-hidden mx-auto gap-2">
                                    {/* For Every Movie at the screen create its card with the information from db */}
                                    {movies.map(movie => {
                                        let url = 'http://localhost:1337'
                                        let movieData = movie.movie[0];
                                        let screenTime = movie.screenTime;

                                        try {
                                            // * Convert the time to the standard 12 hour clock format
                                            screenTime = moment(screenTime, 'hh:mm:ss.SSS').format('h:mm a')
                                        } catch (e) {
                                            console.log(e);
                                        }

                                        return (
                                            <div className="overflow-hidden border rounded-lg mx-auto relative">
                                                <img className="w-full max-w-sm object-cover" src={url + movieData.moviePoster.url} alt={movieData.movieName}></img>
                                                <div className="flex">
                                                    <div className="mt-24 relative"></div>
                                                    <div className="w-1/2">
                                                        <div className="px-6 py-4 absolute bottom-0">
                                                            <div className="font-bold text-xl mb-2" aria-label={movieData.movieName}>{movieData.movieName}</div>
                                                            <p className="text-gray-700 text-base">
                                                                {screenTime}
                                                            </p>
                                                            <p className="text-gray-700 text-base">
                                                                {movie.rating}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="w-1/2 pt-10">
                                                        <div className="px-6 py-4 absolute bottom-0">
                                                            <span>
                                                                <button className="" aria-label="BUY TICKET">BUY TICKET</button>
                                                                <button className="" aria-label="TRAILER">TRAILER</button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    } catch (e) {
        console.log(e);
        return (<div></div>);
    }
} export default MovieCards;