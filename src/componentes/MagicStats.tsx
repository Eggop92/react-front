import { Stack, Typography } from "@mui/material";

interface MagicStatsProps {
    caracteristic: string;
    attack: number;
    saving: number;
}

const MagicStats = ({ caracteristic, attack, saving }: MagicStatsProps) => {
    return (
        <Stack direction='row' justifyContent='space-between' alignItems='center' padding={2}>
            <Stack><Typography>Aptitud mágica</Typography> <Typography>{caracteristic}</Typography></Stack>
            <Stack><Typography>Ataque mágico</Typography>{attack}</Stack>
            <Stack><Typography>Salvación</Typography>{saving}</Stack>
        </Stack>
    )
}

export default MagicStats