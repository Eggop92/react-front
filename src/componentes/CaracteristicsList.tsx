import { Grid } from "@mui/material"
import { ReactNode } from "react"
import { FaHeartbeat } from "react-icons/fa"
import { GiBiceps, GiPublicSpeaker, GiSolidLeaf, GiSpellBook, GiWalkingBoot } from "react-icons/gi"
import { Caracteristic } from "../interfaces/Caracteristic"
import BorderBox from "./BorderBox"
import SkillGroup from "./SkillGroup"


interface Props {
    caracteristics: Caracteristic[],
    proficencyBonus: number,
    proficencies: number[],
    makeRoll: (modifier: number, skill: string, icon: ReactNode, dice: number, ammount: number) => void;
}

const CaracteristicsList = ({ caracteristics, proficencyBonus, proficencies, makeRoll }: Props) => {
    const caracteristiclist = [
        { id: 1, name: 'Fuerza', skills: [{ id: 1, name: 'Salvación' }, { id: 2, name: 'Atletismo' }], icon: <GiBiceps /> },
        { id: 2, name: 'Destreza', skills: [{ id: 3, name: 'Salvación' }, { id: 4, name: 'Acrobacias' }, { id: 5, name: 'Sigilo' }, { id: 6, name: 'Juego de manos' }], icon: <GiWalkingBoot /> },
        { id: 3, name: 'Constitución', skills: [{ id: 7, name: 'Salvación' }], icon: <FaHeartbeat /> },
        { id: 4, name: 'Inteligencia', skills: [{ id: 8, name: 'Salvación' }, { id: 9, name: 'Arcana' }, { id: 10, name: 'Historia' }, { id: 11, name: 'Investigación' }, { id: 12, name: 'Naturaleza' }, { id: 13, name: 'Religión' }], icon: <GiSpellBook /> },
        { id: 5, name: 'Sabiduría', skills: [{ id: 14, name: 'Salvación' }, { id: 15, name: 'Percepción' }, { id: 16, name: 'Supervivencia' }, { id: 17, name: 'Medicina' }, { id: 18, name: 'Perspicacia' }, { id: 19, name: 'Trato animal' }], icon: <GiSolidLeaf /> },
        { id: 6, name: 'Carisma', skills: [{ id: 20, name: 'Salvación' }, { id: 21, name: 'Engañar' }, { id: 22, name: 'Intimidación' }, { id: 23, name: 'Actuación' }, { id: 24, name: 'Persuasión' }], icon: <GiPublicSpeaker /> },
    ];

    const getCaracteristicValue = (id: number) => {
        const caracteristic = caracteristics.find(c => c.id == id);
        if (caracteristic) {
            return caracteristic.value;
        }
        return 0;
    }

    const getModifier = (value: number) => {
        return Math.floor((value - 10) / 2);
    }
    const getSkillModifier = (carcteristicId: number, skillId: number) => {
        const caracteristic = caracteristics.find(c => c.id == carcteristicId);
        if (caracteristic) {
            const modifier = getModifier(caracteristic.value);
            if (proficencies.includes(skillId)) {
                return modifier + proficencyBonus;
            }
            return modifier;
        }
        return 0;
    }
    return (
        <Grid container columns={12} spacing={2} >
            {caracteristiclist.map((caracteristic) => (
                <BorderBox title={caracteristic.name} key={caracteristic.id}>
                    <Grid size={12} direction='row' sx={{ alignItems: 'center' }} padding={1} className='border'>
                        <Grid container columns={12}>
                            <Grid size={3} sx={{ alignItems: 'center', justifyContent: "center", }}>
                                <SkillGroup name={caracteristic.name} superName={'' + getCaracteristicValue(caracteristic.id)} modifier={getModifier(getCaracteristicValue(caracteristic.id))} direction='column-reverse' typographyVariant='h6' icon={caracteristic.icon} makeRoll={makeRoll} />
                            </Grid>
                            <Grid size={9}>
                                <Grid container direction='row' spacing={1} paddingLeft={1} columns={12} sx={{ alignItems: 'center' }} >
                                    {caracteristic.skills.map((skill) => (
                                        <Grid size={6} key={skill.id}>
                                            <SkillGroup name={skill.name} modifier={getSkillModifier(caracteristic.id, skill.id)} proficency={proficencies.includes(skill.id)} direction='row' icon={caracteristic.icon} makeRoll={makeRoll} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </BorderBox>
            ))}
        </Grid>
    )
}

export default CaracteristicsList