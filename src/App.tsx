
import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import { harsyn } from './characters/Harsyn';
import { naur } from './characters/Naur';
import CharacterSheet from './componentes/CharacterSheet';
import TabContent from './componentes/TabContent';

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs characters">
            <Tab label="Naur" />
            <Tab label="Harsyn" />
          </Tabs>
        </Box>
      </Box>
      <TabContent value={value} index={0}>
        <CharacterSheet character={naur} />
      </TabContent>
      <TabContent value={value} index={1}>
        <CharacterSheet character={harsyn} />
      </TabContent>
    </>
  )
}

export default App
