import { NumberField } from '@base-ui-components/react/number-field';
import { Chip, Stack } from "@mui/material";
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
        <Stack direction='column' className="border" padding={1} sx={{ alignItems: 'center' }} spacing={1}>
            <Chip label="Hit points" color="primary" size='small' />
            <Stack direction="row" sx={{ alignItems: 'center' }} >
                {currentHitPoints === maxHitPoints ? <TiHeartFullOutline size='1.5rem' /> : (currentHitPoints === 0 ? <TiHeartOutline size='1.5rem' /> : <TiHeartHalfOutline size='1.5rem' />)}
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
        </Stack>
    )
}

export default HitPoints