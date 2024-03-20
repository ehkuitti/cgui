import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';

const CombinationLock = () => {
  const [combination, setCombination] = useState('');
  const [submittedCombination, setSubmittedCombination] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const correctCombination = '1234'; // Define the correct combination

  const handleLockButtonClick = (number) => {
    setCombination(combination + number);
  };

  const handleReset = () => {
    setCombination('');
    setSubmittedCombination('');
    setIsCorrect(false);
  };

  const handleSubmit = () => {
    setSubmittedCombination(combination);
    setIsCorrect(combination === correctCombination);
    setCombination('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ fontSize: '24px', marginBottom: '20px' }}>
        Combination: {combination}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 60px)', gap: '10px', marginBottom: '20px' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <Button key={number} variant="contained" onClick={() => handleLockButtonClick(number)}>
            {number}
          </Button>
        ))}
        <Grid item xs={4} /> {/* Empty placeholder grid item for centering */}
        <Button variant="contained" onClick={() => handleLockButtonClick(0)}>
          0
        </Button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Button variant="contained" color="secondary" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginLeft: '10px' }}>
          Submit
        </Button>
      </div>
      {submittedCombination && (
        <div style={{ fontSize: '20px', marginTop: '20px' }}>
          Submitted Combination: {submittedCombination} {isCorrect ? '✔️' : '❌'}
        </div>
      )}
    </div>
  );
};

export default CombinationLock;
