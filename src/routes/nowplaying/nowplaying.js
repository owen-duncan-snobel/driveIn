import React from 'react';
import MovieCards from '../../components/movieCards/movieCards';

function NowPlaying(props) {
    return (
        <div>
            <div>
                <MovieCards {...props} />
            </div>
        </div>

    )
} export default NowPlaying;