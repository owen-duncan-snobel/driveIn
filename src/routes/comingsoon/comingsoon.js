import React, { setState, useEffect, useState } from 'react';
import moment from 'moment';
import MovieCards from '../../components/movieCards/movieCards';

/**
 * @component
 * @example
 * const screensDate = [
  {
    "_id": "5f27a49babd5fc0e8b318f62",
    "screenNumber": 2,
    "screenTime": "00:00:00.000",
    "createdAt": "2020-08-03T05:46:03.882Z",
    "updatedAt": "2020-08-03T06:24:40.676Z",
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
    "screenDate": "2020-08-05",
    "id": "5f27a49babd5fc0e8b318f62"
  },
  {
    "_id": "5f27a4adabd5fc0e8b318f63",
    "screenNumber": 3,
    "screenTime": "00:00:00.000",
    "createdAt": "2020-08-03T05:46:21.146Z",
    "updatedAt": "2020-08-03T06:24:47.718Z",
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
      "_id": "5f27a4e1abd5fc0e8b318f67",
      "movieName": "Goonies",
      "createdAt": "2020-08-03T05:47:13.348Z",
      "updatedAt": "2020-08-03T05:47:13.352Z",
      "__v": 0,
      "created_by": "5f263e3eb77b06129019039e",
      "moviePoster": {
        "_id": "5f2643cf3ba7ef189fdfd025",
        "name": "il_570xN.1582204432_g9xe.jpg",
        "alternativeText": "",
        "caption": "",
        "hash": "il_570x_N_1582204432_g9xe_9f8e87f0a5",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "size": 39.26,
        "width": 570,
        "height": 817,
        "url": "/uploads/il_570x_N_1582204432_g9xe_9f8e87f0a5.jpg",
        "formats": {
          "thumbnail": {
            "name": "thumbnail_il_570xN.1582204432_g9xe.jpg",
            "hash": "thumbnail_il_570x_N_1582204432_g9xe_9f8e87f0a5",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 109,
            "height": 156,
            "size": 4.12,
            "path": null,
            "url": "/uploads/thumbnail_il_570x_N_1582204432_g9xe_9f8e87f0a5.jpg"
          },
          "medium": {
            "name": "medium_il_570xN.1582204432_g9xe.jpg",
            "hash": "medium_il_570x_N_1582204432_g9xe_9f8e87f0a5",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 523,
            "height": 750,
            "size": 37.69,
            "path": null,
            "url": "/uploads/medium_il_570x_N_1582204432_g9xe_9f8e87f0a5.jpg"
          },
          "small": {
            "name": "small_il_570xN.1582204432_g9xe.jpg",
            "hash": "small_il_570x_N_1582204432_g9xe_9f8e87f0a5",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 349,
            "height": 500,
            "size": 21.37,
            "path": null,
            "url": "/uploads/small_il_570x_N_1582204432_g9xe_9f8e87f0a5.jpg"
          }
        },
        "provider": "local",
        "related": [
          "5f27a4e1abd5fc0e8b318f67"
        ],
        "createdAt": "2020-08-02T04:40:47.072Z",
        "updatedAt": "2020-08-03T05:47:13.351Z",
        "__v": 0,
        "created_by": "5f263e3eb77b06129019039e",
        "updated_by": "5f263e3eb77b06129019039e",
        "id": "5f2643cf3ba7ef189fdfd025"
      },
      "updated_by": "5f263e3eb77b06129019039e",
      "id": "5f27a4e1abd5fc0e8b318f67"
    },
    "screenDate": "2020-08-05",
    "id": "5f27a4adabd5fc0e8b318f63"
  },
  {
    "_id": "5f27a4b3abd5fc0e8b318f64",
    "screenNumber": 4,
    "screenTime": "00:00:00.000",
    "createdAt": "2020-08-03T05:46:27.666Z",
    "updatedAt": "2020-08-03T06:24:51.956Z",
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
    "screenDate": "2020-08-05",
    "id": "5f27a4b3abd5fc0e8b318f64"
  },
  {
    "_id": "5f27a4b8abd5fc0e8b318f65",
    "screenNumber": 4,
    "screenTime": "00:30:00.000",
    "createdAt": "2020-08-03T05:46:32.457Z",
    "updatedAt": "2020-08-03T06:24:55.673Z",
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
      "_id": "5f27a4e1abd5fc0e8b318f67",
      "movieName": "Goonies",
      "createdAt": "2020-08-03T05:47:13.348Z",
      "updatedAt": "2020-08-03T05:47:13.352Z",
      "__v": 0,
      "created_by": "5f263e3eb77b06129019039e",
      "moviePoster": {
        "_id": "5f2643cf3ba7ef189fdfd025",
        "name": "il_570xN.1582204432_g9xe.jpg",
        "alternativeText": "",
        "caption": "",
        "hash": "il_570x_N_1582204432_g9xe_9f8e87f0a5",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "size": 39.26,
        "width": 570,
        "height": 817,
        "url": "/uploads/il_570x_N_1582204432_g9xe_9f8e87f0a5.jpg",
        "formats": {
          "thumbnail": {
            "name": "thumbnail_il_570xN.1582204432_g9xe.jpg",
            "hash": "thumbnail_il_570x_N_1582204432_g9xe_9f8e87f0a5",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 109,
            "height": 156,
            "size": 4.12,
            "path": null,
            "url": "/uploads/thumbnail_il_570x_N_1582204432_g9xe_9f8e87f0a5.jpg"
          },
          "medium": {
            "name": "medium_il_570xN.1582204432_g9xe.jpg",
            "hash": "medium_il_570x_N_1582204432_g9xe_9f8e87f0a5",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 523,
            "height": 750,
            "size": 37.69,
            "path": null,
            "url": "/uploads/medium_il_570x_N_1582204432_g9xe_9f8e87f0a5.jpg"
          },
          "small": {
            "name": "small_il_570xN.1582204432_g9xe.jpg",
            "hash": "small_il_570x_N_1582204432_g9xe_9f8e87f0a5",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 349,
            "height": 500,
            "size": 21.37,
            "path": null,
            "url": "/uploads/small_il_570x_N_1582204432_g9xe_9f8e87f0a5.jpg"
          }
        },
        "provider": "local",
        "related": [
          "5f27a4e1abd5fc0e8b318f67"
        ],
        "createdAt": "2020-08-02T04:40:47.072Z",
        "updatedAt": "2020-08-03T05:47:13.351Z",
        "__v": 0,
        "created_by": "5f263e3eb77b06129019039e",
        "updated_by": "5f263e3eb77b06129019039e",
        "id": "5f2643cf3ba7ef189fdfd025"
      },
      "updated_by": "5f263e3eb77b06129019039e",
      "id": "5f27a4e1abd5fc0e8b318f67"
    },
    "screenDate": "2020-08-05",
    "id": "5f27a4b8abd5fc0e8b318f65"
  }
]

return (
    <ComingSoon screens={screensDate} />
)
 */
const ComingSoon = () => {
	const [screens, setScreens] = useState([{}]);

	useEffect(() => {
		try {
			let currentDate = moment().format('YYYY-MM-DD');
			let url =
				'https://driveindashboard.herokuapp.com/screens?screenDate_gt=' +
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
				.then((data) => setScreens(data));
		} catch (error) {
			console.log(error);
		}
	});
	return (
		<div>
			<div>
				<MovieCards screens={screens} />
			</div>
		</div>
	);
};
export default ComingSoon;
