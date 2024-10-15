import React, { useState } from 'react';

function MovieGrid() {
  const [caption, setCaption] = useState(''); // State for storing caption
  const [isCaptionVisible, setIsCaptionVisible] = useState(false); // State for showing/hiding caption

  const movieItems = [
    { id: 1, imgSrc: 'https://www.themoviedb.org/t/p/original/9XxMfL0dXH2y1uvmOuIqH5p9gsc.jpg', title: 'Toy Story', rating: '★★★★☆ (4.5)' },
    { id: 2, imgSrc: 'https://th.bing.com/th/id/OIP.W3JRxcuNXXochTVbTSBSlwHaLH?pid=ImgDet&w=185&h=277&c=7&dpr=1,3', title: 'Black Clover', rating: '★★★★☆ (4.2)' },
    { id: 3, imgSrc: 'https://th.bing.com/th/id/OIP.IS6UOrwd2JnHL_ExV8dpxQHaLH?pid=ImgDet&w=185&h=277&c=7&dpr=1,3', title: 'Kungfu Panda', rating: '★★★★★ (5.0)' },
    { id: 4, imgSrc: 'https://www.themoviedb.org/t/p/original/itKMldwL6uhUZYO3X78NOFU4zzO.jpg', title: 'Naruto The Movie: Legend Stone Gelel', rating: '★★★★☆ (4.3)' },
    { id: 5, imgSrc: 'https://www.themoviedb.org/t/p/original/pSQYgFelFjaq3ZumM6cbyPk9ixr.jpg', title: 'Doraemon: Nobita and The Space', rating: '★★★★☆ (4.4)' },
    { id: 6, imgSrc: 'https://th.bing.com/th/id/OIP.i97adbSs_dLEjc5uT_vpFgHaLH?rs=1&pid=ImgDetMain', title: 'Finding Nemo', rating: '★★★★☆ (4.5)' },
    { id: 7, imgSrc: 'https://th.bing.com/th/id/OIP.MbRhXV46UoTkWvhUu2_6vwAAAA?pid=ImgDet&w=185&h=277&c=7&dpr=1,3', title: 'Spirited Away', rating: '★★★★★ (4.8)' },
    { id: 8, imgSrc: 'https://th.bing.com/th/id/OIP.96djkwI0T2mOKJcf3a7SpgHaLH?pid=ImgDet&w=185&h=277&c=7&dpr=1,3', title: 'Moana', rating: '★★★★☆ (4.6)' },
    { id: 9, imgSrc: 'https://th.bing.com/th/id/OIP.WVNts89KxsyLuCnwcCAoRAHaLH?pid=ImgDet&w=185&h=277&c=7&dpr=1,3', title: 'The Lion King', rating: '★★★★★ (5.0)' },
  ];

  const handleMovieClick = (caption) => {
    setCaption(caption); // Set the selected caption
    setIsCaptionVisible(true); // Show caption
  };

  const handleCloseCaption = () => {
    setIsCaptionVisible(false); // Hide caption
  };

  return (
    <div className="movie-grid">
      <h2>Popular Movies</h2>
      <div className="grid">
        {movieItems.map(item => (
          <div className="movie-item" key={item.id} onClick={() => handleMovieClick(item.title)}>
            <img src={item.imgSrc} alt={item.title} />
            <div className="movie-info">
              <h3>{item.title}</h3>
              <p>Rating: {item.rating}</p>
            </div>
            <div className="movie-buttons">
              <button className="play-button">Play</button>
              <button className="more-info-button">More Info</button>
              <button className="book-ticket-button">Book Ticket</button>
            </div>
          </div>
        ))}
      </div>
      {isCaptionVisible && (
        <div className="caption-container">
          <p>{caption}</p>
          <button onClick={handleCloseCaption}>Close</button>
        </div>
      )}
    </div>
  );
}

export default MovieGrid;
