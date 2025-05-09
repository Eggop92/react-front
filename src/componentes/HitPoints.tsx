import { NumberField } from '@base-ui-components/react/number-field';
import { Stack } from "@mui/material";
import { useState } from 'react';
import { TiHeartFullOutline, TiHeartHalfOutline, TiHeartOutline, TiMinus, TiPlus } from 'react-icons/ti';

interface HitPointsProps {
    maxHitPoints: number;
}
const HitPoints = ({ maxHitPoints }: HitPointsProps) => {
    const [currentHitPoints, setCurrentHitPoints] = useState<number | null>(maxHitPoints);
    const onNumberChange = (num: number | null) => {
        setCurrentHitPoints(num)
    }
    return (
        <Stack direction="column" sx={{ alignItems: 'center' }} >
            {currentHitPoints === maxHitPoints ? <TiHeartFullOutline size='1.5rem' color='green' /> : (currentHitPoints === 0 ? <TiHeartOutline size='1.5rem' color='red' /> : <TiHeartHalfOutline size='1.5rem' />)}
            <NumberField.Root defaultValue={maxHitPoints} max={maxHitPoints} min={0} className={'number-input Field'} onValueChange={onNumberChange} >
                <NumberField.Group className={'number-input Group'}>
                    <NumberField.Decrement className={'number-input Decrement'}>
                        <TiMinus />
                    </NumberField.Decrement>
                    <NumberField.Input className={'number-input Input'} />
                    <NumberField.Increment className={'number-input Increment'}>
                        <TiPlus />
                    </NumberField.Increment>
                </NumberField.Group>
            </NumberField.Root>
        </Stack>
    )
}

export default HitPoints