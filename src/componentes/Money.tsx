import { Grid } from "@mui/material"
import BorderBox from "./BorderBox"
import Coin from "./Coin"

interface MoneyProps {
    gold: number,
    silver: number,
    bronze: number
}

const Money = ({ gold, silver, bronze }: MoneyProps) => {
    return (
        <BorderBox title='Money'>
            <Grid container columns={12} spacing={1} padding={1}>
                <Grid size={4}><Coin name='Gold' ammount={gold} color='#D4AF37' /></Grid>
                <Grid size={4}><Coin name='Silver' ammount={silver} color='#E3e4e5' /></Grid>
                <Grid size={4}><Coin name='Bronze' ammount={bronze} color='#Cd7f32' /></Grid>
            </Grid >
        </BorderBox>
    )
}

export default Money