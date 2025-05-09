import { Stack } from "@mui/material";
import { useState } from 'react';
import { TiHeartFullOutline, TiHeartHalfOutline, TiHeartOutline } from 'react-icons/ti';
import NumberCounter from "./NumberCounter";

interface HitPointsProps {
    maxHitPoints: number;
}
const HitPoints = ({ maxHitPoints }: HitPointsProps) => {
    const [currentHitPoints, setCurrentHitPoints] = useState<number>(maxHitPoints);
    const onNumberChange = (num: number) => {
        setCurrentHitPoints(num)
    }
    return (
        <Stack direction="column" sx={{ alignItems: 'center' }} >
            {currentHitPoints === maxHitPoints ? <TiHeartFullOutline size='1.5rem' color='green' /> : (currentHitPoints === 0 ? <TiHeartOutline size='1.5rem' color='red' /> : <TiHeartHalfOutline size='1.5rem' />)}
            <NumberCounter
                defaultValue={currentHitPoints}
                max={maxHitPoints}
                min={0}
                onValueChange={onNumberChange}
            />
        </Stack>
    )
}

export default HitPoints