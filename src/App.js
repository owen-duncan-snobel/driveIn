import React from 'react';
import Navigation from './components/navigation/navigation';
import NowPlaying from './routes/nowplaying/nowplaying';
import './styles.css';

function App() {

  const movies = [
    { movieName: 'Tenet', rating: 'PG', moviePoster: 'https://i.pinimg.com/originals/3d/9e/12/3d9e123e3c0d90b504ac383f77619c40.jpg', trailer: 'www.youtube.com' },
    { movieName: 'Goonies', rating: 'PG', moviePoster: 'https://i.pinimg.com/originals/f9/fd/04/f9fd04258fc7a21c0bd30c2a8bc35903.jpg', trailer: 'www.youtube.com' },
    { movieName: 'Star wars', rating: 'PG', moviePoster: 'https://i.etsystatic.com/18188806/r/il/2501f0/1582204432/il_570xN.1582204432_g9xe.jpg', trailer: 'www.youtube.com' },
    { movieName: 'Gremlins', rating: 'R', moviePoster: 'https://collectorstudio.com/wp-content/uploads/2018/04/image-4646.jpeg', trailer: 'www.youtube.com' },
  ];

  const screens = [
    { screenNumber: 1, movie: movies[0], screenTime: '9:35pm', screenDate: '2020-10-11' },
    { screenNumber: 1, movie: movies[1], screenTime: '9:35pm', screenDate: '2020-10-11' },
    { screenNumber: 2, movie: movies[0], screenTime: '9:35pm', screenDate: '2020-10-11' },
    { screenNumber: 3, movie: movies[3], screenTime: '9:35pm', screenDate: '2020-10-11' }
  ]
  return (
    <div className="h-screen">
      <Navigation />
      <NowPlaying
        screens={screens}
      />
    </div>
  );
}

export default App;
