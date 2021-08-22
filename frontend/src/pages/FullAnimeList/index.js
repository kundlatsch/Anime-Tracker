import React, {useEffect, useState} from 'react';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import './styles.css';
import animeMockData from './animeMockData.json';

function FullAnimeList() {

  const [animeList, setAnimeList] = useState([]);
  let history = useHistory();

  useEffect(() => {
    // TODO: get dayAnime from the backend instead of mock data
    setAnimeList(animeMockData);
  }, []);

  const goToPreviousPage = () => {
    history.goBack();
  }

  const handlePlusClick = (anime) => {
    // TODO: make API call to update the current episode in the backend
    const updateId = anime.id;
    const newCurrentEpisode = anime.currentEpisode + 1;
    const newAnimeList = (animeList.map(animeMap => {
      return animeMap.id === updateId && newCurrentEpisode <= animeMap.totalEpisodes ? 
        { ...animeMap, currentEpisode: newCurrentEpisode }: animeMap
    }));
    setAnimeList(newAnimeList);
  }

  return (
    <div className="center-container">
      <div className="default-container">
        <div className="back-arrow-container" onClick={goToPreviousPage}>
          <FiArrowLeft size="1.5em"/>
        </div>
        <h2>Your anime history</h2>
        
        <div className="anime-container">
          <div className="anime-container-line-history">
            <div className="anime-container-column header">
              Name
            </div>

            <div className="anime-container-column header">
              Release Day
            </div>

            <div className="anime-container-column header">
              Episodes
            </div>
          </div>

          {animeList.map(anime => (
            <div className="anime-container-line-history" key={anime.id}>
            <div className="anime-container-column">
              {anime.name}
            </div>

            <div className="anime-container-column">
              {anime.weekDay}
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

export default FullAnimeList;
