import { Stack, Tooltip } from "@mui/material";
import { GiCoins } from "react-icons/gi";
import NumberCounter from "./NumberCounter";

interface CoinProps {
    name: string,
    ammount: number;
    color: string;
}

const Coin = ({ name, ammount, color }: CoinProps) => {
    return (
        <Stack sx={{ alignItems: 'center' }} spacing={0}>
            <Tooltip title={name} placement="top" arrow>
                <GiCoins color={color} size='1.5rem' />
            </Tooltip><NumberCounter defaultValue={ammount} max={10000} min={0} onValueChange={(num) => { }} />
        </Stack>
    )
}

export default Coin