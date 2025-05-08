import { Stack } from "@mui/material"
import ArmorClass from "./ArmorClass"
import DeathSaves from "./DeathSaves"
import Initiative from "./Initiative"
import ProficencyBonus from "./ProficencyBonus"

const CombatStats = () => {
    return (
        <Stack spacing={2}>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                <ArmorClass armorClass={15} />
                <div>Hit Points</div>
                <div>Speed</div>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
                <Initiative initiativeBonus={1} />
                <ProficencyBonus proficency={2} />
                <DeathSaves />
            </Stack>
        </Stack>
    )
}

export default CombatStats