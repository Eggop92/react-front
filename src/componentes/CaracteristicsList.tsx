import { Grid } from "@mui/material"
import { indigo } from "@mui/material/colors"
import { FaHeartbeat } from "react-icons/fa"
import { GiBiceps, GiPublicSpeaker, GiSolidLeaf, GiSpellBook, GiWalkingBoot } from "react-icons/gi"
import SkillGroup from "./SkillGroup"

const CaracteristicsList = () => {
    const caracteristics = [
        { id: 1, name: 'Fuerza', skills: ['Salvación', 'Atletismo'], icon: <GiBiceps /> },
        { id: 2, name: 'Destreza', skills: ['Salvación', 'Acrobacias', 'Sigilo', 'Juego de manos'], icon: <GiWalkingBoot /> },
        { id: 3, name: 'Constitución', skills: ['Salvación'], icon: <FaHeartbeat /> },
        { id: 4, name: 'Inteligencia', skills: ['Salvación', 'Arcana', 'Historia', 'Investigación', 'Naturaleza', 'Religión'], icon: <GiSpellBook /> },
        { id: 5, name: 'Sabiduría', skills: ['Salvación', 'Percepción', 'Supervivencia', 'Medicina', 'Perspicacia', 'Intuición'], icon: <GiSolidLeaf /> },
        { id: 6, name: 'Carisma', skills: ['Salvación', 'Engañar', 'Intimidación', 'Actuación', 'Persuasión'], icon: <GiPublicSpeaker /> },
    ]

    return (
        <Grid container columns={12} spacing={2} >
            {caracteristics.map((caracteristic) => (
                <Grid key={caracteristic.id} size={12} direction='row' sx={{ alignItems: 'center' }} border={1} borderRadius={2} borderColor={indigo[900]} padding={2}>
                    <Grid container columns={12}>
                        <Grid size={3} sx={{ alignItems: 'center', justifyContent: "center", }}>
                            <SkillGroup name={caracteristic.name} modifier={10} direction='column-reverse' typographyVariant='h6' icon={caracteristic.icon} />
                        </Grid>
                        <Grid size={9}>
                            <Grid container direction='row' spacing={1} paddingLeft={2} columns={12} sx={{ alignItems: 'center' }} >
                                {caracteristic.skills.map((skill) => (
                                    <Grid size={6} key={skill}>
                                        <SkillGroup name={skill} modifier={2} direction='row' icon={caracteristic.icon} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}

export default CaracteristicsList