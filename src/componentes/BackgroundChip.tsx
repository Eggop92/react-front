import { Chip } from '@mui/material'
import { FaRegCompass } from 'react-icons/fa'

interface BackgroundChipProps {
    background: string
}

const BackgroundChip = ({ background }: BackgroundChipProps) => {
    return (
        <Chip icon={<FaRegCompass />} color="info" label={background} />
    )
}

export default BackgroundChip