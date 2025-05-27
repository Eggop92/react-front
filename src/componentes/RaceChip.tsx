import { Chip } from '@mui/material'
import { GiBeamsAura } from 'react-icons/gi'

interface RaceChipProps {
    race: string
}

const RaceChip = ({ race }: RaceChipProps) => {
    return (
        <Chip icon={<GiBeamsAura />} color="success" label={race} />
    )
}

export default RaceChip