import { Badge, Chip } from '@mui/material'
import { ReactElement } from 'react'
import { Bs1CircleFill } from 'react-icons/bs'

interface ClaseChipProps {
    clase: string,
    level: number
}

const ClaseChip = ({ clase, level }: ClaseChipProps) => {
    const classIconMap: { [key: string]: ReactElement } = {
        Barbarian: <Bs1CircleFill />,
        Bard: <Bs1CircleFill />,
        Cleric: <Bs1CircleFill />,
        Druid: <Bs1CircleFill />,
        Fighter: <Bs1CircleFill />,
        Monk: <Bs1CircleFill />,
        Paladin: <Bs1CircleFill />,
        Ranger: <Bs1CircleFill />,
        Rogue: <Bs1CircleFill />,
        Sorcerer: <Bs1CircleFill />,
        Warlock: <Bs1CircleFill />,
        Wizard: <Bs1CircleFill />,
        Artificer: <Bs1CircleFill />,
        "Blood Hunter": <Bs1CircleFill />
    }
    return (
        <Badge badgeContent={level} color="warning" anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}>
            <Chip icon={classIconMap[clase]} color="primary" label={clase} />
        </Badge>

    )
}

export default ClaseChip