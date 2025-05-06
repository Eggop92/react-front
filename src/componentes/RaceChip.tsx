import { Chip } from '@mui/material'
import { ReactElement } from 'react'
import { Bs1CircleFill } from 'react-icons/bs'

interface RaceChipProps {
    race: string
}

const RaceChip = ({ race }: RaceChipProps) => {
    const iconMap: { [key: string]: ReactElement } = {
        Human: <Bs1CircleFill />,
        Elf: <Bs1CircleFill />,
        Dwarf: <Bs1CircleFill />,
        Halfling: <Bs1CircleFill />,
        Dragonborn: <Bs1CircleFill />,
        Gnome: <Bs1CircleFill />,
        HalfElf: <Bs1CircleFill />,
        HalfOrc: <Bs1CircleFill />,
        Tiefling: <Bs1CircleFill />,
        Aasimar: <Bs1CircleFill />,
        Tabaxi: <Bs1CircleFill />
    }

    return (
        <Chip icon={iconMap[race]} color="success" label={race} />
    )
}

export default RaceChip