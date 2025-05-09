import { Button } from "@mui/material"
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
        <Button variant="outlined" color="primary" size="large" sx={{ width: '100%' }} onClick={handleClick}>
            <TbSortDescending2Filled /> {initiativeBonus}
        </Button>

    )
}

export default Initiative