import React, { Component } from 'react';
import MovieCards from '../../components/movieCards/movieCards';

class NowPlaying extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screens: []
        }
    }
    async componentDidMount() {
        try {
            fetch('http://localhost:1337/screens', {
                method: 'GET'
            })
                .then(res => {
                    if (!res.ok) {
                        throw Error(res.statusText);
                    } else {
                        return (res.json());
                    }
                })
                .then(data => this.setState({ screens: data }))
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div>
                <div>
                    <MovieCards screens={this.state.screens} />
                </div>
            </div>

        )
    }
} export default NowPlaying;