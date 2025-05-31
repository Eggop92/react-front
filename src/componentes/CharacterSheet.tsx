import { Grid, Stack } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { Character } from '../interfaces/Character'
import AtacksList from './AttacksList'
import CaracteristicsList from './CaracteristicsList'
import CombatStats from './CombatStats'
import FeatList from './FeatList'
import Header from './Header'
import Magic from './Magic'
import Money from './Money'

interface CharacterSheetProps {
    characterName: string;
}

const CharacterSheet = ({ characterName }: CharacterSheetProps) => {
    const { isPending, isError, data, error } = useQuery<Character>({
        queryKey: [characterName], queryFn: async () => {
            return fetch(`/characters/${characterName}.json`, { "headers": { 'Content-Type': 'application/json' } })
                .then(res => res.json())
                .then(data => data as Character);
        }
    })

    if (isPending) return <div>Loading...</div>
    if (isError) return <div>Error: {error.message}</div>

    return (
        <Stack>
            <Header name={data.name} clase={data.clase} race={data.race} level={data.level} imageProfile={data.imageProfile} background={data.background} />
            <Grid container direction='row' spacing={2} sx={{ justifyContent: 'space-between' }} columns={12}>
                <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={{ xs: 12, xl: 4 }}>
                    <CaracteristicsList caracteristics={data.caracteristics} proficencyBonus={data.proficencyBonus} proficencies={data.proficencies} />
                </Grid>
                <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={{ xs: 12, xl: 4 }}>
                    <Stack spacing={1}>
                        <CombatStats armorClass={data.armourClass} initiativeBonus={data.initiativeBonus} proficency={data.proficencyBonus} speed={data.speed} speedType={data.speedType} maxHitPoints={data.maxHitPoints} />
                        <Money gold={data.goldCoins} silver={data.silverCoins} bronze={data.copperCoins} />
                        <AtacksList list={data.attacks} />
                        <Magic caracteristic={data.magicCaracteristic} attack={data.magicAttackBonus} saving={data.magicSaveDC} levels={data.magicLevels} />
                    </Stack>
                </Grid>
                <Grid sx={{ alignItems: 'center', justifyContent: "center", }} size={{ xs: 12, xl: 4 }}>
                    <FeatList feats={data.feats} />
                </Grid>
            </Grid>
        </Stack>
    )
}

export default CharacterSheet