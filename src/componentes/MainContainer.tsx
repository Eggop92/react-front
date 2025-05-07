import { Grid } from "@mui/material"
import CaracteristicsList from "./CaracteristicsList"
import CombatStats from "./CombatStats"

const MainContainer = () => {
    return (
        <Grid container direction='row' spacing={2} sx={{ justifyContent: 'space-between' }} columns={12}>
            <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={5}>
                <CaracteristicsList caracteristics={[
                    { id: 1, value: 15 },
                    { id: 2, value: 13 },
                    { id: 3, value: 10 },
                    { id: 4, value: 10 },
                    { id: 5, value: 17 },
                    { id: 6, value: 8 }
                ]} proficencyBonus={2} proficencies={[1, 2, 3]}
                />
            </Grid>
            <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={3}>
                <CombatStats />
            </Grid>
            <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={4}>
                <div>Right</div>
            </Grid>
        </Grid>
    )
}

export default MainContainer