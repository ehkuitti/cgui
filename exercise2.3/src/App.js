import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import './style.css';

const PetGreeting = () => {
  const [petName, setPetName] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    if (petName && animalType) {
      let greeting = '';
      switch (animalType) {
        case 'dog':
          greeting = `Hau hau, ${petName}! Olet niin hyvä koira.`;
          break;
        case 'cat':
          greeting = `Miau miau, ${petName}! Olet täydellinen kissa.`;
          break;
        case 'bird':
          greeting = `Tsirp tsirp, ${petName}! Lennä korkealle ja laula suloisesti.`;
          break;
        default:
          greeting = `Hei, ${petName}! Olet ihana lemmikki.`;
      }
      setMessage(greeting);
    } else {
      setMessage('Täytä sekä nimi että tyyppi.');
    }
  };

  return (
    <div className="center-container">
      <h1>Elukantervehtimissovellus</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Kirjoita lemmikkisi nimi"
            variant="outlined"
            fullWidth
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Valitse elukan tyyppi</InputLabel>
            <Select
              value={animalType}
              onChange={(e) => setAnimalType(e.target.value)}
              label="Valitse elukan tyyppi"
            >
              <MenuItem value="">Valitse elukan tyyppi</MenuItem>
              <MenuItem value="dog">Koira</MenuItem>
              <MenuItem value="cat">Kissa</MenuItem>
              <MenuItem value="bird">Lintu</MenuItem>
              {/* Add more options for other animal types */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {/* Blank row */}
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleButtonClick} fullWidth>
            Tervehdi elukkaa
          </Button>
        </Grid>
      </Grid>
      <p>{message}</p>
    </div>
  );
};

export default PetGreeting;
