import React from 'react';
import MovieCards from '../../components/movieCards/movieCards';

function NowPlaying(props) {
    return (
        <div>
            <div>
                Now Playing
                    <MovieCards {...props} />
                {/*  {props.movies.map(el => <div>{el.movieName}</div>)} */}
            </div>

            <div>

            </div>
        </div>

    )
} export default NowPlaying;