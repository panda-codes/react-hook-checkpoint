import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';
import MovieDetails from './components/MovieDetails';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Kungfu Panda', description: 'Fighting Panda', posterURL: 'kongfu.jpg', rating: 8, trailerURL: 'https://youtu.be/kbgf4j9sNZ4?si=wydtE0tYhGgd4g9v' },
    { id: 2, title: 'Ghost Busters', description: 'Busting evil ghost', posterURL: 'ghostbusters.jpg', rating: 7, trailerURL: 'https://youtu.be/HpOBXh02rVc?si=YFlTgxi-AoKa2VT4' },
    { id: 3, title: 'Batman', description: 'Batman in the rain', posterURL: 'batman.jpg', rating: 7, trailerURL: 'https://youtu.be/u34gHaRiBIU?si=uTBXCXpBObyeLrfl'},
    { id: 4, title: 'La Casa De Papel ( Money Heist)', description: 'Gang robbery', posterURL: 'money heist.jpg', rating: 4, trailerURL: "https://youtu.be/_InqQJRqGW4?si=m60q5yxZLSP0mM0I"},
    { id: 5, title: 'Madame Web', description: 'Spider woman saves the day', posterURL: 'spiderwoman.jpg', rating: 8, trailerURL: "https://youtu.be/s_76M4c4LTo?si=cYdSJGymkFgOvBh1"},
    { id: 6, title: 'Dead Pool', description: 'Dead pool 3 mobile cool', posterURL: 'deadpool.jpg', rating: 5, trailerURL: 'https://youtu.be/uJMCNJP2ipI?si=qjIgPLsG6X0n09-9' },
    { id: 7, title: 'Star Wars', description: 'Star Wars the bad batch', posterURL: 'starwars.jpg', rating: 3,trailerURL: 'https://youtu.be/Oa5zeHdSwdQ?si=99QEAF8dFUV6QIBN' },
    { id: 8, title: 'Kingdom of The Plantes of Ape', description: 'Ape-dom ', posterURL: 'kingdom of apes.jpg', rating: 8, trailerURL: 'https://youtu.be/XtFI7SNtVpY?si=nYN7SPhxyCXipx33'},
    { id: 9, title: 'Barbie', description: 'Life of a barbie', posterURL: 'barbie.jpg', rating: 10, trailerUrL: 'https://youtu.be/pBk4NYhWNMM?si=XZeB3hqvKP7VQ8E0' },
    { id: 10, title: 'Avatar', description: 'The last airbender', posterURL: 'avatar.jpg', rating: 5, trailerURL: 'https://youtu.be/ByAn8DF8Ykk?si=HuTOgfuZ1cPGPj-M'},
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = ({ title, rating, posterURL, description }) => {
    let filtered = movies;
    if (title) {
      filtered = filtered.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (rating) {
      filtered = filtered.filter(movie => movie.rating >= rating);
    }
    if (posterURL) {
      filtered = filtered.filter(movie => movie.posterURL >= posterURL);
    }
    if (description) {
      filtered = filtered.filter(movie => movie.description >= description);
    }
    setFilteredMovies(filtered);
  };

  return (
    // <Router>
      <div className="App">
        <h1>Movie Collections</h1>
        <Filter onFilter={handleFilter} />
        <Routes>
          <Route exact path="/" element={<MovieList movies={filteredMovies} />}/>
          <Route path="/movie/:id" component={MovieDetails} />
        </Routes>
      </div>
    // </Router>
  );
};

export default App;