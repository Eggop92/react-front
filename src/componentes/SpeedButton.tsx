import { SpeedDial, SpeedDialAction } from '@mui/material';
import React from 'react';
import { GiDiceEightFacesEight, GiDiceTwentyFacesTwenty } from 'react-icons/gi';
import { GoHistory } from 'react-icons/go';

interface SpeedButtonProps {
    makeRoll: (modifier: number, skill: string, icon: React.ReactNode, dice: number, ammount: number) => void;
    toggleDrawer: (newOpen: boolean) => void;
}

const SpeedButton = ({ makeRoll, toggleDrawer }: SpeedButtonProps) => {

    const actions = [
        { icon: <GoHistory size={'2em'} />, name: 'History', click: () => toggleDrawer(true) },
        { icon: <GiDiceTwentyFacesTwenty size={'2em'} />, name: 'd4', click: () => makeRoll(0, '', <GiDiceTwentyFacesTwenty />, 4, 1) },
        { icon: <GiDiceTwentyFacesTwenty size={'2em'} />, name: 'd6', click: () => makeRoll(0, '', <GiDiceTwentyFacesTwenty />, 6, 1) },
        { icon: <GiDiceEightFacesEight size={'2em'} />, name: 'd8', click: () => makeRoll(0, '', <GiDiceTwentyFacesTwenty />, 8, 1) },
        { icon: <GiDiceTwentyFacesTwenty size={'2em'} />, name: 'd10', click: () => makeRoll(0, '', <GiDiceTwentyFacesTwenty />, 10, 1) },
        { icon: <GiDiceTwentyFacesTwenty size={'2em'} />, name: 'd12', click: () => makeRoll(0, '', <GiDiceTwentyFacesTwenty />, 12, 1) },
        { icon: <GiDiceTwentyFacesTwenty size={'2em'} />, name: 'd20', click: () => makeRoll(0, '', <GiDiceTwentyFacesTwenty />, 20, 1) },
    ];
    return (
        <SpeedDial
            ariaLabel="Rolls"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<GiDiceTwentyFacesTwenty size={'2em'} />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={action.click}
                />
            ))}
        </SpeedDial>
    )
}

export default SpeedButton