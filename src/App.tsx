
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import React, { ReactNode, useState } from 'react';
import './App.css';
import CharacterSheet from './componentes/CharacterSheet';
import RollBox from './componentes/RollBox';
import RollsDrawer from './componentes/RollsDrawer';
import SpeedButton from './componentes/SpeedButton';
import TabContent from './componentes/TabContent';

function App() {
  const [value, setValue] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [rollsHistory, setRollsHistory] = useState<ReactNode[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };


  const { isPending, isError, data, error } = useQuery<string[]>({
    queryKey: ["charactersList"], queryFn: async () => {
      return fetch(`http://localhost:8080/characters`, { "headers": { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" } })
        .then(res => res.json())
        .then(data => data as string[]);
    }
  });

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const makeRoll = (modifier: number, skill: string, icon: ReactNode, dice: number = 20, ammount: number = 1) => {
    const rolls: number[] = [];
    let totalRolls = 0;
    [...Array(ammount).keys()].forEach(() => {
      let r = Math.floor(Math.random() * dice) + 1;
      rolls.push(r);
      totalRolls += r;
    });


    const sign = modifier >= 0 ? "+" : "";
    const total = rolls.reduce((prev, current) => prev + current, 0) + modifier;
    const bgColor = rolls.length === 1 ? rolls[0] === dice ? "success.main" : rolls[0] === 1 ? "error.main" : "primary.main" : "primary.main";
    const hoverColor = rolls.length === 1 ? rolls[0] === dice ? "success.dark" : rolls[0] === 1 ? "error.dark" : "primary.dark" : "primary.dark";
    const rollText: string = (rolls.length > 1 ? rolls.reduce((prev, current) => { return prev + ' + ' + current; }, '') : rolls[0]) + (modifier !== 0 ? sign + modifier : '');


    const text = <Typography>You roled {rollText === total.toString() ? (<><b>{total}</b></>) : (<>{rollText} = <b>{total}</b></>)} {skill ? (<> for <b>{skill}</b></>) : ''}</Typography>;
    const roll = <RollBox icon={icon} rollText={text} />;

    // we generate the snackbar with the new roll
    enqueueSnackbar({ anchorOrigin: { horizontal: 'center', vertical: 'bottom' }, variant: 'skillCheckSnackbar', bgColor: bgColor, hoverColor: hoverColor, node: roll });
    // and we store the roll in the history to show it in the drawer
    setRollsHistory([...rollsHistory, roll]);
  };

  if (isPending) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>
  if (!data || data.length === 0) return <div>No characters found</div>;

  return (
    <>
      <SpeedButton makeRoll={makeRoll} toggleDrawer={toggleDrawer} />
      <RollsDrawer open={open} toggleDrawer={toggleDrawer} rollsHistory={rollsHistory} />
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
          <CharacterSheet characterName={character} makeRoll={makeRoll} />
        </TabContent>
      ))}
    </>
  )
}

export default App
