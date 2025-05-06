import { Grid } from "@mui/material"
import CaracteristicsList from "./CaracteristicsList"

const MainContainer = () => {
    return (
        <Grid container direction='row' spacing={2} sx={{ justifyContent: 'space-between' }} columns={12}>
            <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={5}>
                <CaracteristicsList />
            </Grid>
            <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={3}>
                <div>Center</div>
            </Grid>
            <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={4}>
                <div>Right</div>
            </Grid>
        </Grid>
    )
}

export default MainContainer