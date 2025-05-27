import { Grid, Stack } from '@mui/material'
import { Character } from '../interfaces/Character'
import AtacksList from './AttacksList'
import CaracteristicsList from './CaracteristicsList'
import CombatStats from './CombatStats'
import FeatList from './FeatList'
import Header from './Header'
import Magic from './Magic'
import Money from './Money'

interface CharacterSheetProps {
    character: Character;
}

const CharacterSheet = ({ character }: CharacterSheetProps) => {
    return (
        <Stack>
            <Header name={character.name} clase={character.clase} race={character.race} level={character.level} imageProfile={character.imageProfile} background={character.background} />
            <Grid container direction='row' spacing={2} sx={{ justifyContent: 'space-between' }} columns={12}>
                <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={{ xs: 12, xl: 4 }}>
                    <CaracteristicsList caracteristics={character.caracteristics} proficencyBonus={character.proficencyBonus} proficencies={character.proficencies} />
                </Grid>
                <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={{ xs: 12, xl: 4 }}>
                    <Stack spacing={1}>
                        <CombatStats armorClass={character.armourClass} initiativeBonus={character.initiativeBonus} proficency={character.proficencyBonus} speed={character.speed} speedType={character.speedType} maxHitPoints={character.maxHitPoints} />
                        <Money gold={character.goldCoins} silver={character.silverCoins} bronze={character.copperCoins} />
                        <AtacksList list={character.attacks} />
                        <Magic caracteristic={character.magicCaracteristic} attack={character.magicAttackBonus} saving={character.magicSaveDC} levels={character.magicLevels} />
                    </Stack>
                </Grid>
                <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={{ xs: 12, xl: 4 }}>
                    <FeatList feats={character.feats} />
                </Grid>
            </Grid>
        </Stack>
    )
}

export default CharacterSheet