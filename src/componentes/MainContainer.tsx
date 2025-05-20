import { Grid, Stack } from "@mui/material"
import { Attack } from "../interfaces/Attack"
import { MagicLevel } from "../interfaces/MagicLevel"
import AtacksList from "./AttacksList"
import CaracteristicsList from "./CaracteristicsList"
import CombatStats from "./CombatStats"
import Magic from "./Magic"
import Money from "./Money"

const MainContainer = () => {
    const attackList: Attack[] = [
        { name: 'Hacha', attackModifier: 3, damageModifier: 1, numberDiceDamage: 1, typeDiceDamage: 12, typeDamage: "slashing" },
        { name: 'Mandoble', attackModifier: 5, damageModifier: 2, numberDiceDamage: 2, typeDiceDamage: 6, typeDamage: "slashing" },
        { name: 'Daga', attackModifier: 1, damageModifier: 1, numberDiceDamage: 1, typeDiceDamage: 4, typeDamage: "piercing" }
    ];
    const magicLevels: MagicLevel[] = [
        {
            name: "Cantrips", slots: 0, spells: [
                { name: 'Saeta de fuego', attackModifier: 6, damageModifier: 0, numberDiceDamage: 1, typeDiceDamage: 10, typeDamage: "fire", description: "Arrojas una mota de fuego a una criatura u objeto dentro del alcance. Realiza un ataque de conjuro a distancia contra el objetivo. Con un impacto, el objetivo sufre 1d10 puntos de daño por fuego. Un objeto inflamable impactado por este conjuro se prende si no está siendo sujetado o transportado. El daño de este conjuro se incrementa en 1d10 cuando alcanzas el nivel 5 (2d10), nivel 11 (3d10) y nivel 17 (4d10)." },
                { name: 'Bola de fuego', attackModifier: 6, damageModifier: 0, numberDiceDamage: 8, typeDiceDamage: 6, typeDamage: "fire" },
                { name: 'Bola de fuego', savingThrow: 15, savingThrowType: 'DEX', damageModifier: 0, numberDiceDamage: 8, typeDiceDamage: 6, typeDamage: "fire" }
            ]
        },
        {
            name: "Nivel 1", slots: 3, spells: [
                { name: 'Bola de fuego', attackModifier: 6, damageModifier: 0, numberDiceDamage: 8, typeDiceDamage: 6, typeDamage: "fire" }
            ]
        },
        {
            name: "Nivel 2", slots: 2, spells: [
                { name: 'Bola de fuego', attackModifier: 6, damageModifier: 0, numberDiceDamage: 8, typeDiceDamage: 6, typeDamage: "fire" }
            ]
        },
    ];
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
            <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={4}>
                <Stack spacing={1}>
                    <CombatStats armorClass={15} initiativeBonus={2} proficency={2} speed={30} speedType="walking" maxHitPoints={30} />
                    <Money gold={30} silver={10} bronze={0} />
                    <AtacksList list={attackList} />
                    <Magic caracteristic="SAB" attack={6} saving={15} levels={magicLevels} />
                </Stack>
            </Grid>
            <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={3}>

            </Grid>
        </Grid>
    )
}

export default MainContainer