import { NumberField } from '@base-ui-components/react';
import { TiMinus, TiPlus } from 'react-icons/ti';

interface NumberCounterProps {
    defaultValue: number;
    max: number;
    min: number;
    onValueChange: (num: number) => void;
}
const NumberCounter = ({ defaultValue, max, min, onValueChange }: NumberCounterProps) => {
    return (
        <NumberField.Root defaultValue={defaultValue} max={max} min={min} className={'number-input Field'} onValueChange={(number) => onValueChange(number ? number : 0)} >
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
    )
}

export default NumberCounter