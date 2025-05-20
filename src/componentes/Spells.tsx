import { Checkbox, List, Stack } from "@mui/material";
import { purple, red } from "@mui/material/colors";
import { GiCrossMark, GiStarSwirl } from "react-icons/gi";
import { Attack } from "../interfaces/Attack";
import AttackBox from "./AttackBox";

interface SpellsProps {
    quantity: number;
    spells?: Attack[];
}

const Spells = ({ quantity, spells }: SpellsProps) => {
    return (
        <>
            <Stack direction='row' sx={{ justifyContent: "flex-end", alignItems: "center" }}>
                {[...Array(quantity).keys()].map((_, index) => (
                    <Checkbox key={index} size={"large"} icon={<GiStarSwirl color={purple[500]} />} checkedIcon={<GiCrossMark color={red[900]} />} />
                ))}
            </Stack>
            <List sx={{ padding: 0 }}>
                {spells?.map((attack, index) => (
                    <AttackBox key={index} attack={attack} />
                ))}

            </List>
        </>
    )
}

export default Spells