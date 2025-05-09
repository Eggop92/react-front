import { Grid } from "@mui/material"
import ArmorClass from "./ArmorClass"
import DeathSaves from "./DeathSaves"
import HitPoints from "./HitPoints"
import Initiative from "./Initiative"
import ProficencyBonus from "./ProficencyBonus"
import Speed from "./Speed"
import StatBox from "./StatBox"

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
            <Grid size={3}><StatBox title='Armour'><ArmorClass armorClass={armorClass} /></StatBox></Grid>
            <Grid size={4}><StatBox title='Proficency'><ProficencyBonus proficency={proficency} /></StatBox></Grid>
            <Grid size={3}><StatBox title='Speed'><Speed speed={speed} speedType={speedType} /></StatBox></Grid>
            <Grid size={3}><StatBox title='Initiative'><Initiative initiativeBonus={initiativeBonus} /></StatBox></Grid>
            <Grid size={3}><StatBox title='HP'><HitPoints maxHitPoints={maxHitPoints} /></StatBox></Grid>
            <Grid size={4}><StatBox title='Death saves'><DeathSaves /></StatBox></Grid>
        </Grid>
    )
}

export default CombatStats