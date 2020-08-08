import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import Screens from './screens/screens';

function MovieCards(props) {

    // * All Screens is all the entries that have been fetched from the DB Table Screens
    const allScreens = props.screens;
    // * Sort then Group all the screens together by date in ascending order
    const screenDates = _.chain(allScreens)
        .sort((a, b) => a.screenDate > b.screenDate)
        .groupBy(screen => screen.screenDate)
        .entries()
        .value()

    try {
        return (
            <div>
                {/** For Each Date, select the Screens that have Movies playing on that date  */}
                {screenDates.map(date => {
                    // * index 0 holds the Date, index 1 has the Screens with movies on the date
                    let screens = date[1];
                    let screenDate = moment(date[0], 'YYYY-MM-DD').toLocaleString().substr(0, 15);

                    const screensOnDate = _.chain(screens)
                        .sort((a, b) => a.screenTime > b.screenTime)
                        .groupBy(screen => screen.screenNumber)
                        .entries()
                        .value()

                    // * For Every Screen on the specific date you need to display all movies on each screen
                    return (
                        <div>
                            <p className="font-bold text-5xl text-center text-gray-900">{screenDate}</p>
                            {screensOnDate.map(screens => {
                                let screenNumber = screens[0];
                                return (
                                    <div>
                                        <p className="font-bold text-5xl text-center text-gray-900">Screen {screenNumber}</p>
                                        <Screens screens={screens} />
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
                }
            </div >
        )
    } catch (e) {
        console.log(e);
        return (
            <div></div>
        );
    }
} export default MovieCards;