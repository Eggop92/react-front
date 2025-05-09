import { Stack, Typography } from "@mui/material"
import { GiAmericanShield } from "react-icons/gi"

interface ArmorClassProps {
    armorClass: number
}

const ArmorClass = ({ armorClass }: ArmorClassProps) => {
    return (
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }} >
            <GiAmericanShield size='1.5rem' />
            <Typography variant="h5">{armorClass}</Typography>
        </Stack>
    )
}

export default ArmorClass