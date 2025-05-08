import { Chip, Stack, Typography } from "@mui/material"
import { GiSkills } from "react-icons/gi"

interface ProficencyBonusProps {
    proficency: number
}

const ProficencyBonus = ({ proficency }: ProficencyBonusProps) => {
    return (

        <Stack direction='column' className="border" padding={1} sx={{ alignItems: 'center' }} spacing={1}>
            <Chip label="Proficency" color="primary" size='small' />
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }} >
                <GiSkills size='1.5rem' />
                <Typography variant="h5">{proficency}</Typography>
            </Stack>
        </Stack>

    )
}

export default ProficencyBonus