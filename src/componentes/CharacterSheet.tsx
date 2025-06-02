import { Grid, Stack } from '@mui/material'
import { ReactNode } from 'react'
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
    makeRoll: (modifier: number, skill: string, icon: ReactNode, dice: number, ammount: number) => void;
}

const CharacterSheet = ({ character, makeRoll }: CharacterSheetProps) => {
    return (
        <Stack>
            <Header name={character.name} clase={character.clase} race={character.race} level={character.level} imageProfile={character.imageProfile} background={character.background} />
            <Grid container direction='row' spacing={2} sx={{ justifyContent: 'space-between' }} columns={12}>
                <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={{ xs: 12, xl: 4 }}>
                    <CaracteristicsList caracteristics={character.caracteristics} proficencyBonus={character.proficencyBonus} proficencies={character.proficencies} makeRoll={makeRoll} />
                </Grid>
                <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={{ xs: 12, xl: 4 }}>
                    <Stack spacing={1}>
                        <CombatStats armorClass={character.armourClass} initiativeBonus={character.initiativeBonus} proficency={character.proficencyBonus} speed={character.speed} speedType={character.speedType} maxHitPoints={character.maxHitPoints} makeRoll={makeRoll} />
                        <Money gold={character.goldCoins} silver={character.silverCoins} bronze={character.copperCoins} />
                        <AtacksList list={character.attacks} makeRoll={makeRoll} />
                        <Magic caracteristic={character.magicCaracteristic} attack={character.magicAttackBonus} saving={character.magicSaveDC} levels={character.magicLevels} makeRoll={makeRoll} />
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