import React, { useState } from 'react';
import '../App.css'; // Ensure the necessary CSS is added here

function MenuHomeMovies() {
  const [selectedMovie, setSelectedMovie] = useState(''); // State to store the selected movie for booking
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control the popup visibility
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const [selectedInfoMovie, setSelectedInfoMovie] = useState(null); // State for More Info popup

  const movieItems = [
    { id: 1, imgSrc: 'https://www.themoviedb.org/t/p/original/9XxMfL0dXH2y1uvmOuIqH5p9gsc.jpg', title: 'Toy Story', genre: 'Animation, Adventure', director: 'John Lasseter', rating: '★★★★☆ (4.5)', trailerSrc: 'https://www.youtube.com/embed/v-PjgYDrg70?si=VYVyV26zMOHEnIcB', 
      synopsis: "A little boy named Andy loves to be in his room, playing with his toys, especially his doll named 'Woody'. But, what do the toys do when Andy is not with them, they come to life. Woody believes that his life (as a toy) is good. However, he must worry about Andy's family moving, and what Woody does not know is about Andy's birthday party. Woody does not realize that Andy's mother gave him an action figure known as Buzz Lightyear, who does not believe that he is a toy, and quickly becomes Andy's new favorite toy. Woody, who is now consumed with jealousy, tries to get rid of Buzz. Then, both Woody and Buzz are now lost. They must find a way to get back to Andy before he moves without them, but they will have to pass through a ruthless toy killer, Sid Phillips."
    },
    { id: 2, imgSrc: 'https://th.bing.com/th/id/OIP.sor59rK-sjrOsW9U6z9rpgHaK9?w=1152&h=1706&rs=1&pid=ImgDetMain', title: 'Black Clover: Sword of the Wizard King', director: 'Ayataka Tanemura', genre: 'Action, Adventure', rating: '★★★★☆ (4.2)', trailerSrc: 'https://www.youtube.com/embed/PrgxJ1_sUcs?si=mxlOsggCuzmatNj8',
      synopsis: "Asta, a boy born with no magic in a world where magic is everything, and his rival Yuno, a genius mage chosen by the legendary 4-leaf Grimoire, have together fought a number of powerful enemies to prove their power beyond adversity and aim for the top mage 'Wizard King'. Standing in front of Asta and Yuno, who dream of becoming the Wizard King, are the Wizard Kings from the past. Conrad Leto, Julius Novachrono's predecessor Wizard King, once respected by the people of Clover Kingdom but suddenly rebelled against the kingdom and was sealed away, has been resurrected. Now he aims to use the 'Imperial Sword' to resurrect the 3 most feared Wizard Kings in the history, Edward Avalaché, Princia Funnybunny and Jester Garandaros, and take over the Clover Kingdom."
    },
    { id: 3, imgSrc: 'https://th.bing.com/th/id/OIP.IS6UOrwd2JnHL_ExV8dpxQHaLH?pid=ImgDet&w=185&h=277&c=7&dpr=1,3', title: 'Kungfu Panda', genre: 'Animation, Action', director: 'Mark Osborne, John Stevenson', rating: '★★★★★ (5.0)', trailerSrc: 'https://www.youtube.com/embed/NRc-ze7Wrxw?si=T4EadbJ2UtW0Kf3C',
      synopsis: "It's the story about a lazy, irreverent slacker panda, named Po, who is the biggest fan of Kung Fu around...which doesn't exactly come in handy while working every day in his family's noodle shop. Unexpectedly chosen to fulfill an ancient prophecy, Po's dreams become reality when he joins the world of Kung Fu and studies alongside his idols, the legendary Furious Five -- Tigress, Crane, Mantis, Viper and Monkey -- under the leadership of their guru, Master Shifu. But before they know it, the vengeful and treacherous snow leopard Tai Lung is headed their way, and it's up to Po to defend everyone from the oncoming threat. Can he turn his dreams of becoming a Kung Fu master into reality? Po puts his heart - and his girth - into the task, and the unlikely hero ultimately finds that his greatest weaknesses turn out to be his greatest strengths."
    },
    { id: 4, imgSrc: 'https://www.themoviedb.org/t/p/original/itKMldwL6uhUZYO3X78NOFU4zzO.jpg', title: 'Naruto The Movie: Legend Stone Gelel', genre: 'Action, Adventure', director: 'Hirotsugu Kawasaki', rating: '★★★★☆ (4.3)', trailerSrc: 'https://www.youtube.com/embed/TZxoLVSofL8?si=G_9YF-6Y1lngXVSl', 
      synopsis: "Naruto, Kakashi, Sakura, and Lee are sent to protect a prince during his trip around the world and see that he returns safely to his home in the Moon Country. The Moon Country happens to be really rich and as such the Prince tends to buy anything his heart desires, during his travels the Prince would come across a circus group that features a rare Sabre-toothed tiger that he just had to have. So he purchased the entire group. Suddenly a mission to protect just the spoiled prince that hardly listened to anything said, turns in to a mission to look after animals and a prince that doesn't listen to what they say, and in the end somehow get them all back safely to their home country. All the while there are three mysterious Ninja wielding some frightening jutsu waiting for them. Why are they attacking them? What do they want with Team Kakashi!?."
    },
    { id: 5, imgSrc: 'https://www.themoviedb.org/t/p/original/pSQYgFelFjaq3ZumM6cbyPk9ixr.jpg', title: 'Doraemon: Nobita and The Space', genre: 'Comedy, Adventure', director: 'Yoshihiro Osugi', rating: '★★★★☆ (4.4)', trailerSrc: 'https://www.youtube.com/embed/DdhWonvPe54?si=jG6LuiB25RlzK_No', 
      synopsis: "Nobita wishes to be a real hero. Doraemon uses his gadget, the Burger Director to make them a real movie superhero. Aron saw the five powers and abilities and asks them to help him save his planet, the planet Pokkuru. After their journey to the planet, the gang thought it was only Burger's doing but realizing that it is not a movie and they are actually fighting bad guys."
    },
    { id: 6, imgSrc: 'https://th.bing.com/th/id/OIP.i97adbSs_dLEjc5uT_vpFgHaLH?rs=1&pid=ImgDetMain', title: 'Finding Nemo', genre: 'Animation, Adventure', director: 'Andrew Stanton, Lee Unkrich', rating: '★★★★☆ (4.5)', trailerSrc: 'https://www.youtube.com/embed/9oQ628Seb9w?si=vtG6SlnWE-Bkdglf',
      synopsis: "A clown fish named Marlin lives in the Great Barrier Reef and loses his son, Nemo, after he ventures into the open sea, despite his father's constant warnings about many of the ocean's dangers. Nemo is abducted by a boat and netted up and sent to a dentist's office in Sydney. While Marlin ventures off to try to retrieve Nemo, Marlin meets a fish named Dory, a blue tang suffering from short-term memory loss. The companions travel a great distance, encountering various dangerous sea creatures such as sharks, anglerfish and jellyfish, in order to rescue Nemo from the dentist's office, which is situated by Sydney Harbour. While the two are searching the ocean far and wide, Nemo and the other sea animals in the dentist's fish tank plot a way to return to the sea to live their lives free again."
    },
    { id: 7, imgSrc: 'https://th.bing.com/th/id/OIP.MbRhXV46UoTkWvhUu2_6vwAAAA?pid=ImgDet&w=185&h=277&c=7&dpr=1,3', title: 'Spirited Away', genre: 'Adventure, Fantasy', director: 'Hayao Miyazaki', rating: '★★★★★ (4.8)', trailerSrc: 'https://www.youtube.com/embed/ByXuk9QqQkk?si=J14pNsAjD9RHGWg_',
      synopsis: "The story of a lonely child lost in a beautiful and bizarre dreamscape, Spirited Away naturally bears comparison to Alice in Wonderland and The Wizard of Oz. But in contrast to those frenetic classics, Hayao Miyazaki's masterpiece is coolly meditative – a serene head trip."
    },
    { id: 8, imgSrc: 'https://th.bing.com/th/id/OIP.96djkwI0T2mOKJcf3a7SpgHaLH?pid=ImgDet&w=185&h=277&c=7&dpr=1,3', title: 'Moana', genre: 'Animation, Adventure', director: 'John Musker, Ron Clements', rating: '★★★★☆ (4.6)', trailerSrc: 'https://www.youtube.com/embed/LKFuXETZUsI?si=Y8i0ySIUagBZw5JI',
      synopsis: "Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her island's fishermen can't catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fiti's heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology."
    },
    { id: 9, imgSrc: 'https://th.bing.com/th/id/OIP.WVNts89KxsyLuCnwcCAoRAHaLH?pid=ImgDet&w=185&h=277&c=7&dpr=1,3', title: 'The Lion King', genre: 'Animation, Adventure', director: 'Rob Minkoff, Roger Allers', rating: '★★★★★ (5.0)', trailerSrc: 'https://www.youtube.com/embed/lFzVJEksoDY?si=WfApXVVsez5gWe75',
      synopsis: "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?"
    },
  ];

  const handlePlayTrailer = (trailerSrc) => {
    setSelectedTrailer(trailerSrc);
  };

  const handleCloseTrailer = () => {
    setSelectedTrailer(null);
  };

  // Function to open the popup and set the selected movie
  const handleBookTicket = (movieTitle) => {
    setSelectedMovie(movieTitle); // Set the selected movie title
    setIsPopupOpen(true); // Open the popup
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
    setSelectedMovie(''); // Clear the selected movie
  };

  const handleMoreInfo = (movie) => {
    setSelectedInfoMovie(movie);
  };

  const handleCloseMoreInfo = () => {
    setSelectedInfoMovie(null);
  };

  return (
    <div className="movie-grid">
      <h2>Popular Movies</h2>
      <div className="grid">
        {movieItems.map(item => (
          <div className="movie-item" key={item.id}>
            <img src={item.imgSrc} alt={item.title} />
            <div className="movie-info">
              <h3>{item.title}</h3>
              <p>Rating: {item.rating}</p>
            </div>
            <div className="movie-buttons">
              <button className="play-button" onClick={() => handlePlayTrailer(item.trailerSrc)}>Play</button>
              <button className="more-info-button" onClick={() => handleMoreInfo(item)}>More Info</button>
              <button className="book-ticket-button" onClick={() => handleBookTicket(item.title)}>Book Ticket</button>
            </div>
          </div>
        ))}
      </div>

      {selectedTrailer && (
        <div className="popup open">
          <div className="popup-content-trailer">
            <iframe
              src={selectedTrailer}
              title="Trailer Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-button-trailer" onClick={handleCloseTrailer}>Close Trailer</button>
          </div>
        </div>
      )}


      {/* Popup for More Info */}
      {selectedInfoMovie && (
        <div className="popup open">
          <div className="popup-content-infomovie">
            <div className="info-content">
              <img src={selectedInfoMovie.imgSrc} alt={selectedInfoMovie.title} className="info-image" />
            </div>
            <div className="info-details">
                <h2>{selectedInfoMovie.title}</h2>
                <p><strong>Genre:</strong> {selectedInfoMovie.genre}</p>
                <p><strong>Director:</strong> {selectedInfoMovie.director}</p>
                <p><strong>Rating:</strong> {selectedInfoMovie.rating}</p>
                <p><strong>Synopsis: </strong>{selectedInfoMovie.synopsis}</p>
            </div>
            <div className="info-buttons">
                <button className="close-button" onClick={handleCloseMoreInfo}>Close</button>
                <button className="book-ticket-button" onClick={() => handleBookTicket(selectedInfoMovie.title)}>Book Ticket</button>
            </div>
          </div>
        </div>
      )}

      {/* Popup for Booking Tickets */}
      {isPopupOpen && (
  <div className={`popup ${isPopupOpen ? 'open' : ''}`}>
    <div className="popup-content">
      <div className="booking-container">
        <h2>Book Your Ticket</h2>
        <form id="booking-form">
          <label htmlFor="movie-name">Movie Name:</label>
          <input type="text" id="movie-name" name="movie-name" value={selectedMovie} readOnly required />

          <label htmlFor="customer-name">Your Name:</label>
          <input type="text" id="customer-name" name="customer-name" required />

          <label htmlFor="seat-number">Seat Number:</label>
          <select id="seat-number" name="seat-number" required>
            <option value="" disabled selected>Select a seat</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="A3">A3</option>
            <option value="A4">A4</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="B3">B3</option>
            <option value="B4">B4</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
            <option value="C3">C3</option>
            <option value="C4">C4</option>
            <option value="D1">D1</option>
            <option value="D2">D2</option>
            <option value="D3">D3</option>
            <option value="D4">D4</option>
            <option value="E1">E1</option>
            <option value="E2">E2</option>
            <option value="E3">E3</option>
            <option value="E4">E4</option>
            <option value="F1">F1</option>
            <option value="F2">F2</option>
            <option value="F3">F3</option>
            <option value="F4">F4</option>
            <option value="G1">G1</option>
            <option value="G2">G2</option>
            <option value="G3">G3</option>
            <option value="G4">G4</option>
            <option value="H1">H1</option>
            <option value="H2">H2</option>
            <option value="H3">H3</option>
            <option value="H4">H4</option>
          </select>
          <button className="button" type="submit">Book Ticket</button>
        </form>
        <button className="close-button" onClick={handleClosePopup}>Close</button>
        <div className="confirmation-message" id="confirmation-message"></div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default MenuHomeMovies;
