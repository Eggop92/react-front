import { Button } from "@mui/material"
import { useSnackbar } from "notistack"
import { TbSortDescending2Filled } from "react-icons/tb"

interface InitiativeProps {
    initiativeBonus: number
}

const Initiative = ({ initiativeBonus }: InitiativeProps) => {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar({ variant: 'skillCheckSnackbar', modifier: initiativeBonus, skill: "iniciativa", icon: < TbSortDescending2Filled />, dice: 20, ammount: 1 });
    };

    return (
        <Button variant="outlined" color="primary" onClick={handleClick} startIcon={<TbSortDescending2Filled />}>
            {initiativeBonus}
        </Button>

    )
}

export default Initiative