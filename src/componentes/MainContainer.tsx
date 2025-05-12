import { Grid, Stack } from "@mui/material"
import { Attack } from "../interfaces/Attack"
import AtacksList from "./AttacksList"
import CaracteristicsList from "./CaracteristicsList"
import CombatStats from "./CombatStats"
import Money from "./Money"

const MainContainer = () => {
    const attackList: Attack[] = [
        { name: 'Hacha', attackModifier: 3, damageModifier: 1, numberDiceDamage: 1, typeDiceDamage: 12, typeDamage: "slashing" },
        { name: 'Mandoble', attackModifier: 5, damageModifier: 2, numberDiceDamage: 2, typeDiceDamage: 6, typeDamage: "slashing" },
        { name: 'Daga', attackModifier: 1, damageModifier: 1, numberDiceDamage: 1, typeDiceDamage: 4, typeDamage: "piercing" },
        { name: 'Bola de fuego', attackModifier: 6, damageModifier: 0, numberDiceDamage: 8, typeDiceDamage: 6, typeDamage: "fire" }
    ]
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
                <Stack spacing={1}>
                    <CombatStats armorClass={15} initiativeBonus={2} proficency={2} speed={30} speedType="walking" maxHitPoints={30} />
                    <Money gold={30} silver={10} bronze={0} />
                </Stack>
            </Grid>
            <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={4}>
                <AtacksList list={attackList} />
            </Grid>
        </Grid>
    )
}

export default MainContainer