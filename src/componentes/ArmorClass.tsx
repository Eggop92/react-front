import { Chip, Stack, Typography } from "@mui/material"
import { GiAmericanShield } from "react-icons/gi"

interface ArmorClassProps {
    armorClass: number
}

const ArmorClass = ({ armorClass }: ArmorClassProps) => {
    return (
        <Stack direction='column' className="border" padding={1} sx={{ alignItems: 'center' }} spacing={1}>
            <Chip label="Armour" color="primary" size='small' />
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }} >
                <GiAmericanShield size='1.5rem' />
                <Typography variant="h5">{armorClass}</Typography>
            </Stack>
        </Stack>
    )
}

export default ArmorClass