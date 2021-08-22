import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import NewAnimeModal from './components/NewAnimeModal';
import { useHistory } from 'react-router-dom';

import './styles.css';
import animeMockData from './animeMockData.json';

function UserHome() {

  const [username, setUsername] = useState("");
  const [weekDay, setWeekday] = useState("");
  const [dayAnime, setDayAnime] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  let history = useHistory();

  const handleClickDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogReturn = (newAnime) => {
    if (newAnime.animeWeekDay === weekDay) {
      setDayAnime([...dayAnime, newAnime]);
    }
  }

  const navigateToHistory = () => {
    history.push("/animeHistory");
  };

  useEffect(() => {
    // TODO: get real username from global state after login
    setUsername("Gustavo");
    const browserWeekDay = new Date().toLocaleString('en-us', {  weekday: 'long' });
    setWeekday(browserWeekDay);
    
    // TODO: get dayAnime from the backend instead of mock data
    setDayAnime(animeMockData);
  }, []);

  const handlePlusClick = (anime) => {
    // TODO: make API call to update the current episode in the backend
    const updateId = anime.id;
    const newCurrentEpisode = anime.currentEpisode + 1;
    const updateAnimeList = (dayAnime.map(animeMap => {
      return animeMap.id === updateId && newCurrentEpisode <= animeMap.totalEpisodes ? 
        { ...animeMap, currentEpisode: newCurrentEpisode }: animeMap
    }));
    setDayAnime(updateAnimeList);
  }

  const handleLogout = () => {
    // TODO: implement logout logic
    history.push("/");
  }

  return (
    <div className="center-container" id="user-home">
      <div className="default-container">

        <div className="buttons-container">
          <button
            type="submit" 
            className="green-button"
            onClick={handleClickDialogOpen}
          >
            New Anime
          </button>

          <NewAnimeModal 
            open={dialogOpen} 
            handleClose={handleDialogClose} 
            returnFunction={handleDialogReturn}
          />

          <button
            type="submit" 
            className="green-button"
            onClick={navigateToHistory}
          >
            Full List
          </button>
        </div>

        <h2>{username}, these are your {weekDay} episodes:</h2>

        <div className="anime-container">
          <div className="anime-container-line">
            <div className="anime-container-column header">
              Name
            </div>

            <div className="anime-container-column header">
              Episodes
            </div>
          </div>

          {dayAnime.map(anime => (
            <div className="anime-container-line" key={anime.id}>
            <div className="anime-container-column">
              {anime.name}
            </div>

            <div className="anime-container-column">
              {anime.currentEpisode}/{anime.totalEpisodes}
              <div className="plus-container" onClick={() => {handlePlusClick(anime)}}>
                <FiPlus />
              </div>
            </div>
          </div>
          ))}
          
        </div>

        <p onClick={handleLogout}>
          Logout
        </p>

      </div>
    </div>
  )
}

export default UserHome
