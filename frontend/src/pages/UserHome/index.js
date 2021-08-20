import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';

import './styles.css';
import animeMockData from './animeMockData.json';

function UserHome() {

  const [username, setUsername] = useState("");
  const [weekDay, setWeekday] = useState("");
  const [weekAnime, setWeekAnime] = useState([]);

  useEffect(() => {
    // TODO: get real username from global state after login
    setUsername("Gustavo");
    const browserWeekDay = new Date().toLocaleString('en-us', {  weekday: 'long' });
    setWeekday(browserWeekDay);
    
    // TODO: get weekAnime from the backend instead of mock data
    setWeekAnime(animeMockData);
  }, []);

  const handlePlusClick = (anime) => {
    // TODO: make API call to update the current episode in the backend
    const updateId = anime.id;
    const newCurrentEpisode = anime.currentEpisode + 1;
    const updateAnimeList = (weekAnime.map(animeMap => {
      return animeMap.id === updateId && newCurrentEpisode <= animeMap.totalEpisodes ? 
        { ...animeMap, currentEpisode: newCurrentEpisode }: animeMap
    }));
    setWeekAnime(updateAnimeList);
  }

  return (
    <div className="center-container">
      <div className="default-container">

        <div className="buttons-container">
          <button
            type="submit" 
            className="green-button"
          >
            New Anime
          </button>

          <button
            type="submit" 
            className="green-button"
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

          {weekAnime.map(anime => (
            <div className="anime-container-line">
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

      </div>
    </div>
  )
}

export default UserHome
