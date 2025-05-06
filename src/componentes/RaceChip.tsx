import { Chip } from '@mui/material'
import { ReactElement } from 'react'
import { FaCat } from 'react-icons/fa6'
import { GiAngelOutfit, GiBadGnome, GiDwarfFace, GiElfHelmet, GiGooeyDaemon, GiOrcHead, GiSpikedDragonHead, GiWomanElfFace } from 'react-icons/gi'
import { PiClover, PiFinnTheHuman } from 'react-icons/pi'

interface RaceChipProps {
    race: string
}

const RaceChip = ({ race }: RaceChipProps) => {
    const iconMap: { [key: string]: ReactElement } = {
        Human: <PiFinnTheHuman />,
        Elf: <GiElfHelmet />,
        Dwarf: <GiDwarfFace />,
        Halfling: <PiClover />,
        Dragonborn: <GiSpikedDragonHead />,
        Gnome: <GiBadGnome />,
        HalfElf: <GiWomanElfFace />,
        HalfOrc: <GiOrcHead />,
        Tiefling: <GiGooeyDaemon />,
        Aasimar: <GiAngelOutfit />,
        Tabaxi: <FaCat />
    }

    return (
        <Chip icon={iconMap[race]} color="success" label={race} />
    )
}

export default RaceChip