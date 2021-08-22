import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


export default function NewAnimeModal({open, handleClose, returnFunction}) {

  const [animeName, setAnimeName] = useState("");
  const [numberOfEpisodes, setNumberOfEpisodes] = useState(0);
  const [animeWeekDay, setAnimeWeekDay] = useState("");

  const handleNameChange = (event) => {
    const name = event.target.value;
    setAnimeName(name);
  };

  const handleEpisodesChange = (event) => {
    const episodes = event.target.value;
    setNumberOfEpisodes(episodes);
  };

  const handleWeekdayChange = (event) => {
    const weekDay = event.target.value;
    setAnimeWeekDay(weekDay);
  };

  const addNewAnime = () => {
    // TODO: make API call to add the new anime
    if (animeName.length > 0 && numberOfEpisodes > 0 && animeName !== "") {
      returnFunction({
        name: animeName,
        totalEpisodes: numberOfEpisodes,
        currentEpisode: 0,
        animeWeekDay,
        id: -1
      });
      handleClose();
    }
  }


  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">New Anime</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Add a new anime to your list. Please, insert a valid name, 
          a number of episodes greater than zero and choose a release day of the week.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Anime name"
          type="text"
          onChange={handleNameChange}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Number of Episodes"
          type="number"
          onChange={handleEpisodesChange}
          fullWidth
        />

        <div className="vspace20"></div>
        <InputLabel htmlFor="age-native-simple">Release day</InputLabel>
        <Select
          native
          onChange={handleWeekdayChange}
        >
          <option aria-label="None" value="" />
          <option>Sunday</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
        </Select>

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={addNewAnime} color="primary">
          Add Anime
        </Button>
      </DialogActions>
    </Dialog>
  );
}