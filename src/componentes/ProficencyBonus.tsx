import { Stack, Typography } from "@mui/material"
import { GiSkills } from "react-icons/gi"

interface ProficencyBonusProps {
    proficency: number
}

const ProficencyBonus = ({ proficency }: ProficencyBonusProps) => {
    return (
        <Stack direction="row" spacing={1} sx={{ justifyContent: "center", alignItems: 'center' }} >
            <GiSkills size='1.5rem' />
            <Typography variant="h5">{proficency}</Typography>
        </Stack>
    )
}

export default ProficencyBonus