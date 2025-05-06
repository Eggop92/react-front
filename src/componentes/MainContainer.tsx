import { Stack } from "@mui/material"
import CaracteristicsList from "./CaracteristicsList"

const MainContainer = () => {
    return (
        <Stack direction='row' spacing={2} sx={{ justifyContent: 'space-between' }}>
            <CaracteristicsList />
            <div>Center</div>
            <div>Right</div>
        </Stack>
    )
}

export default MainContainer