import { Grid } from "@mui/material"
import ArmorClass from "./ArmorClass"
import DeathSaves from "./DeathSaves"
import HitPoints from "./HitPoints"
import Initiative from "./Initiative"
import ProficencyBonus from "./ProficencyBonus"
import Speed from "./Speed"

interface CombatStatsProps {
    armorClass: number
    maxHitPoints: number
    speed: number
    speedType: "walking" | "flying" | "swimming"
    initiativeBonus: number
    proficency: number
}

const CombatStats = ({ armorClass, maxHitPoints, speed, speedType, initiativeBonus, proficency }: CombatStatsProps) => {
    return (
        <Grid container columns={10} spacing={1}>
            <Grid size={3}><ArmorClass armorClass={armorClass} /></Grid>
            <Grid size={3}><ProficencyBonus proficency={proficency} /></Grid>
            <Grid size={3}><Speed speed={speed} speedType={speedType} /></Grid>
            <Grid size={4}><Initiative initiativeBonus={initiativeBonus} /></Grid>
            <Grid size={5}><HitPoints maxHitPoints={maxHitPoints} /></Grid>
            <Grid size={5}><DeathSaves /></Grid>
        </Grid>
    )
}

export default CombatStats