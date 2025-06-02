import { Grid } from "@mui/material"
import { ReactNode } from "react"
import ArmorClass from "./ArmorClass"
import BorderBox from "./BorderBox"
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
    makeRoll: (modifier: number, skill: string, icon: ReactNode, dice: number, ammount: number) => void;
}

const CombatStats = ({ armorClass, maxHitPoints, speed, speedType, initiativeBonus, proficency, makeRoll }: CombatStatsProps) => {
    return (
        <Grid container columns={10} spacing={1}>
            <Grid size={3}><BorderBox title='Armour'><ArmorClass armorClass={armorClass} /></BorderBox></Grid>
            <Grid size={4}><BorderBox title='Proficency'><ProficencyBonus proficency={proficency} /></BorderBox></Grid>
            <Grid size={3}><BorderBox title='Speed'><Speed speed={speed} speedType={speedType} /></BorderBox></Grid>
            <Grid size={3}><BorderBox title='Initiative'><Initiative initiativeBonus={initiativeBonus} makeRoll={makeRoll} /></BorderBox></Grid>
            <Grid size={3}><BorderBox title='HP'><HitPoints maxHitPoints={maxHitPoints} /></BorderBox></Grid>
            <Grid size={4}><BorderBox title='Death saves'><DeathSaves /></BorderBox></Grid>
        </Grid>
    )
}

export default CombatStats