
import { Box, Tab, Tabs } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import './App.css';
import CharacterSheet from './componentes/CharacterSheet';
import TabContent from './componentes/TabContent';

function App() {

  const { isPending, isError, data, error } = useQuery<string[]>({
    queryKey: ["charactersList"], queryFn: async () => {
      return fetch(`http://localhost:8080/characters`, { "headers": { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" } })
        .then(res => res.json())
        .then(data => data as string[]);
    }
  });


  const [value, setValue] = useState<number>(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (isPending) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>
  if (!data || data.length === 0) return <div>No characters found</div>;

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs characters">
            {data.map((character, index) => (
              <Tab label={character} key={index} />
            ))}
          </Tabs>
        </Box>
      </Box>
      {data.map((character, index) => (
        <TabContent value={value} index={index} key={index}>
          <CharacterSheet characterName={character} />
        </TabContent>
      ))}
    </>
  )
}

export default App
