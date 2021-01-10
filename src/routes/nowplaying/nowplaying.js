import React, { Component } from 'react';
import moment from 'moment';
import MovieCards from '../../components/movieCards/movieCards';
/**
 * @component
 * @example
 * const screensDate = [
  {
    "_id": "5f27a48babd5fc0e8b318f60",
    "screenNumber": 2,
    "screenTime": "00:00:00.000",
    "createdAt": "2020-08-03T05:45:47.857Z",
    "updatedAt": "2020-08-03T06:24:31.541Z",
    "__v": 0,
    "created_by": {
      "_id": "5f263e3eb77b06129019039e",
      "username": null,
      "firstname": "Owen",
      "lastname": "Duncan-Snobel",
      "createdAt": "2020-08-02T04:17:02.657Z",
      "updatedAt": "2020-08-02T04:17:02.668Z",
      "__v": 0,
      "id": "5f263e3eb77b06129019039e"
    },
    "updated_by": {
      "_id": "5f263e3eb77b06129019039e",
      "username": null,
      "firstname": "Owen",
      "lastname": "Duncan-Snobel",
      "createdAt": "2020-08-02T04:17:02.657Z",
      "updatedAt": "2020-08-02T04:17:02.668Z",
      "__v": 0,
      "id": "5f263e3eb77b06129019039e"
    },
    "movie": {
      "rating": "PG",
      "_id": "5f27a457abd5fc0e8b318f5b",
      "movieName": "Tenet",
      "createdAt": "2020-08-03T05:44:55.276Z",
      "updatedAt": "2020-08-03T05:44:55.285Z",
      "__v": 0,
      "created_by": "5f263e3eb77b06129019039e",
      "moviePoster": {
        "_id": "5f2643cf3ba7ef189fdfd027",
        "name": "f9fd04258fc7a21c0bd30c2a8bc35903.jpg",
        "alternativeText": "",
        "caption": "",
        "hash": "f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "size": 143.9,
        "width": 697,
        "height": 1024,
        "url": "/uploads/f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b.jpg",
        "formats": {
          "thumbnail": {
            "name": "thumbnail_f9fd04258fc7a21c0bd30c2a8bc35903.jpg",
            "hash": "thumbnail_f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 106,
            "height": 156,
            "size": 7.35,
            "path": null,
            "url": "/uploads/thumbnail_f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b.jpg"
          },
          "large": {
            "name": "large_f9fd04258fc7a21c0bd30c2a8bc35903.jpg",
            "hash": "large_f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 681,
            "height": 1000,
            "size": 139.23,
            "path": null,
            "url": "/uploads/large_f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b.jpg"
          },
          "medium": {
            "name": "medium_f9fd04258fc7a21c0bd30c2a8bc35903.jpg",
            "hash": "medium_f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 510,
            "height": 750,
            "size": 89.33,
            "path": null,
            "url": "/uploads/medium_f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b.jpg"
          },
          "small": {
            "name": "small_f9fd04258fc7a21c0bd30c2a8bc35903.jpg",
            "hash": "small_f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 340,
            "height": 500,
            "size": 46.84,
            "path": null,
            "url": "/uploads/small_f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b.jpg"
          }
        },
        "provider": "local",
        "related": [
          "5f27a457abd5fc0e8b318f5b"
        ],
        "createdAt": "2020-08-02T04:40:47.111Z",
        "updatedAt": "2020-08-03T05:44:55.283Z",
        "__v": 0,
        "created_by": "5f263e3eb77b06129019039e",
        "updated_by": "5f263e3eb77b06129019039e",
        "id": "5f2643cf3ba7ef189fdfd027"
      },
      "updated_by": "5f263e3eb77b06129019039e",
      "id": "5f27a457abd5fc0e8b318f5b"
    },
    "screenDate": "2020-08-04",
    "id": "5f27a48babd5fc0e8b318f60"
  },
  {
    "_id": "5f27a491abd5fc0e8b318f61",
    "screenNumber": 2,
    "screenTime": "01:00:00.000",
    "createdAt": "2020-08-03T05:45:53.642Z",
    "updatedAt": "2020-08-03T06:24:36.617Z",
    "__v": 0,
    "created_by": {
      "_id": "5f263e3eb77b06129019039e",
      "username": null,
      "firstname": "Owen",
      "lastname": "Duncan-Snobel",
      "createdAt": "2020-08-02T04:17:02.657Z",
      "updatedAt": "2020-08-02T04:17:02.668Z",
      "__v": 0,
      "id": "5f263e3eb77b06129019039e"
    },
    "updated_by": {
      "_id": "5f263e3eb77b06129019039e",
      "username": null,
      "firstname": "Owen",
      "lastname": "Duncan-Snobel",
      "createdAt": "2020-08-02T04:17:02.657Z",
      "updatedAt": "2020-08-02T04:17:02.668Z",
      "__v": 0,
      "id": "5f263e3eb77b06129019039e"
    },
    "movie": {
      "rating": "PG",
      "_id": "5f27a457abd5fc0e8b318f5b",
      "movieName": "Tenet",
      "createdAt": "2020-08-03T05:44:55.276Z",
      "updatedAt": "2020-08-03T05:44:55.285Z",
      "__v": 0,
      "created_by": "5f263e3eb77b06129019039e",
      "moviePoster": {
        "_id": "5f2643cf3ba7ef189fdfd027",
        "name": "f9fd04258fc7a21c0bd30c2a8bc35903.jpg",
        "alternativeText": "",
        "caption": "",
        "hash": "f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "size": 143.9,
        "width": 697,
        "height": 1024,
        "url": "/uploads/f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b.jpg",
        "formats": {
          "thumbnail": {
            "name": "thumbnail_f9fd04258fc7a21c0bd30c2a8bc35903.jpg",
            "hash": "thumbnail_f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 106,
            "height": 156,
            "size": 7.35,
            "path": null,
            "url": "/uploads/thumbnail_f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b.jpg"
          },
          "large": {
            "name": "large_f9fd04258fc7a21c0bd30c2a8bc35903.jpg",
            "hash": "large_f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 681,
            "height": 1000,
            "size": 139.23,
            "path": null,
            "url": "/uploads/large_f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b.jpg"
          },
          "medium": {
            "name": "medium_f9fd04258fc7a21c0bd30c2a8bc35903.jpg",
            "hash": "medium_f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 510,
            "height": 750,
            "size": 89.33,
            "path": null,
            "url": "/uploads/medium_f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b.jpg"
          },
          "small": {
            "name": "small_f9fd04258fc7a21c0bd30c2a8bc35903.jpg",
            "hash": "small_f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 340,
            "height": 500,
            "size": 46.84,
            "path": null,
            "url": "/uploads/small_f9fd04258fc7a21c0bd30c2a8bc35903_271c08be6b.jpg"
          }
        },
        "provider": "local",
        "related": [
          "5f27a457abd5fc0e8b318f5b"
        ],
        "createdAt": "2020-08-02T04:40:47.111Z",
        "updatedAt": "2020-08-03T05:44:55.283Z",
        "__v": 0,
        "created_by": "5f263e3eb77b06129019039e",
        "updated_by": "5f263e3eb77b06129019039e",
        "id": "5f2643cf3ba7ef189fdfd027"
      },
      "updated_by": "5f263e3eb77b06129019039e",
      "id": "5f27a457abd5fc0e8b318f5b"
    },
    "screenDate": "2020-08-04",
    "id": "5f27a491abd5fc0e8b318f61"
  }
]
return (
    <NowPlaying screens={screensDate} />
)
 */
class NowPlaying extends Component {
	constructor(props) {
		super(props);
		this.state = {
			screens: props.screens,
		};
	}
	async componentDidMount() {
		try {
			let currentDate = moment().format('YYYY-MM-DD');
			let url =
				'https://driveindashboard.herokuapp.com/screens?screenDate=' +
				currentDate;

			fetch(url, {
				method: 'GET',
			})
				.then((res) => {
					if (!res.ok) {
						throw Error(res.statusText);
					} else {
						return res.json();
					}
				})
				.then((data) => this.setState({ screens: data }));
		} catch (error) {
			console.log(error);
		}
	}
	render() {
		return (
			<div>
				<MovieCards screens={this.state.screens} />
			</div>
		);
	}
}

export default NowPlaying;
