
import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import CharacterSheet from './componentes/CharacterSheet';
import TabContent from './componentes/TabContent';

function App() {
  const characters = [
    'Harsyn',
    'Naur'
  ]
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs characters">
            {characters.map((character, index) => (
              <Tab label={character} key={index} />
            ))}
          </Tabs>
        </Box>
      </Box>
      {characters.map((character, index) => (
        <TabContent value={value} index={index} key={index}>
          <CharacterSheet characterName={character} />
        </TabContent>
      ))}
    </>
  )
}

export default App
