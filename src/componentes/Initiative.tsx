import { Button, Chip } from "@mui/material"
import Stack from "@mui/material/Stack"
import { useSnackbar } from "notistack"
import { TbSortDescending2Filled } from "react-icons/tb"

interface InitiativeProps {
    initiativeBonus: number
}

const Initiative = ({ initiativeBonus }: InitiativeProps) => {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar({ variant: 'skillCheckSnackbar', modifier: initiativeBonus, skill: "iniciativa", icon: < TbSortDescending2Filled /> });
    };

    return (
        <Stack className="border" padding={1} spacing={2}>
            <Chip label="Iniciativa" color="primary" />
            <Button variant="outlined" color="primary" size="large" sx={{ width: '100%' }} onClick={handleClick}>
                <TbSortDescending2Filled /> {initiativeBonus}
            </Button>
        </Stack>
    )
}

export default Initiative