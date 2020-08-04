import React, { Component } from 'react';
import moment from 'moment';
import MovieCards from '../../components/movieCards/movieCards';

class ComingSoon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screens: []
        }
    }
    async componentDidMount() {
        let currentDate = moment().format('YYYY-MM-DD');
        let url = 'http://localhost:1337/screens?screenDate_gt=' + currentDate;
        try {
            fetch(url, {
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
} export default ComingSoon;