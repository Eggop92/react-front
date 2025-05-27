import { Badge, Chip } from '@mui/material'
import { GiFlatStar } from 'react-icons/gi'

interface ClaseChipProps {
    clase: string,
    level: number
}

const ClaseChip = ({ clase, level }: ClaseChipProps) => {

    return (
        <Badge badgeContent={level} color="warning" anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}>
            <Chip icon={<GiFlatStar />} color="primary" label={clase} />
        </Badge>

    )
}

export default ClaseChip