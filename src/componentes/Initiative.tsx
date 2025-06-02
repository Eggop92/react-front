import { Button } from "@mui/material";
import { ReactNode } from "react";
import { TbSortDescending2Filled } from "react-icons/tb";

interface InitiativeProps {
    initiativeBonus: number
    makeRoll: (modifier: number, skill: string, icon: ReactNode, dice: number, ammount: number) => void;
}

const Initiative = ({ initiativeBonus, makeRoll }: InitiativeProps) => {
    return (
        <Button variant="outlined" color="primary" onClick={() => makeRoll(initiativeBonus, "iniciativa", <TbSortDescending2Filled />, 20, 1)} startIcon={<TbSortDescending2Filled />}>
            {initiativeBonus}
        </Button>

    )
}

export default Initiative