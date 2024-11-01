import React from 'react';
import '../App.css';

const TrendingNowMovies = [
  {id: 1,title: "VENOM: THE LAST DANCE",rating: '★★★★☆ (4.6)',genre: "Action",imageUrl: "https://nos.jkt-1.neo.id/media.cinema21.co.id/movie-images/24VLDE.jpg"},
  {id: 2,title: "Inside Out 2",rating: '★★★★☆ (4.2)',genre: "Adventure, Animation",imageUrl: "https://lumiere-a.akamaihd.net/v1/images/io2_desktop_640x480_fb99b254.jpeg?region=0,0,2667,2000"},
  {id: 3,title: "Deadpool & Wolverine",rating: '★★★★★ (5.0)',genre: "Dark Comedy, Action",imageUrl: "https://lumiere-a.akamaihd.net/v1/images/tayang_tidalwave_fight_localized_742x1100_da1d8b60.jpeg"},
  {id: 4,title: "Kingdom of the Planet of the Apes",rating: '★★★★☆ (4.3)',genre: "Action, Adventure",imageUrl: "https://img.englishcinemakyiv.com/JwRKTUxDIVBMWbPJLIx02g8t24RmLWDuwXXgVnoenF4/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy8xMWZmNjY1NS03NWNkLTQ1NGItYTBlMS1mZWQ0YzFmMzY3ZjQuanBn.jpg"},
  {id: 5,title: "A Quiet Place: Day One",rating: '★★★★☆ (4.4)',genre: "Drama, Horror",imageUrl: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/05/a-quiet-place-day-one-poster.jpg"},
  {id: 6,title: "Godzilla x Kong: The New Empire",rating: '★★★★☆ (4.5)',genre: "Action, Adventure",imageUrl: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/02/godzilla-x-kong-the-new-empire-poster.jpg"},
];

const PopularMovies = [
    {id: 7,title: "Kung Fu Panda 4",rating: '★★★★★ (4.8)',genre: "Animation, Action",imageUrl: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/12/kp4_payoff1sheet27_green_rgb_1.jpg"},
    {id: 8,title: "Despicable Me 4",rating: '★★★★☆ (4.6)',genre: "Animation, Adventure",imageUrl: "https://image.tmdb.org/t/p/original/jR7ugO72zsNoNTIyt1iwlNP2qm4.jpg"},
    {id: 9,title: "Avengers: Endgame",rating: '★★★★☆ (4.2)',genre: "Action, Adventure",imageUrl: "https://images.hdqwalls.com/wallpapers/poster-avengers-endgame-ni.jpg"},
    {id: 10,title: "Black Clover: Sword of the Wizard King",rating: '★★★★★ (5.0)',genre: "Action, Adventure",imageUrl: "https://www.fredzone.org/wp-content/uploads/2022/12/black-clover-sword-of-the-wizard-king-le-film.jpg"},
    {id: 11,title: "Dune: Part Two",rating: '★★★★☆ (4.3)',genre: "Action, Adventure",imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/fd/b2/76/fdb276e7-ac61-856a-3eeb-36007e9fba7c/794043220425.jpg/1200x1200bf-60.jpg"},
    {id: 12,title: "The Garfield Movie",rating: '★★★★☆ (4.4)',genre: "Animation, Adventure",imageUrl: "https://th.bing.com/th/id/OIP.x9k3FL_cWx77cJ83hh-vugHaJQ?rs=1&pid=ImgDetMain"},
  ];

const Movies = () => {
  return (
    <div className="movies-container">
      <h2>Trending Now</h2>
      <div className="movies-grid">
        {TrendingNowMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.imageUrl} alt={movie.title} className="movie-image" />
            <div className="movie-details">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-genre">{movie.genre}</p>
              <p className="movie-rating">Rating: {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
      
      <h2 className='moviegrid'>Popular Movies</h2>
      <div className="movies-grid">
        {PopularMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.imageUrl} alt={movie.title} className="movie-image" />
            <div className="movie-details">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-genre">{movie.genre}</p>
              <p className="movie-rating">Rating: {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;