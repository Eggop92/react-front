import { Button, Grid, Stack, Typography } from "@mui/material"
import { indigo } from "@mui/material/colors"

const CaracteristicsList = () => {
    const caracteristics = [
        { id: 1, name: 'Fuerza', skills: ['Salvación', 'Atletismo'] },
        { id: 2, name: 'Destreza', skills: ['Salvación', 'Acrobacias', 'Sigilo', 'Juego de manos'] },
        { id: 3, name: 'Constitucion', skills: ['Salvación'] },
        { id: 4, name: 'Inteligencia', skills: ['Salvación', 'Arcana', 'Historia', 'Investigación', 'Naturaleza', 'Religión'] },
        { id: 5, name: 'Sabiduría', skills: ['Salvación', 'Percepción', 'Supervivencia', 'Medicina', 'Perspicacia', 'Intuición'] },
        { id: 6, name: 'Carisma', skills: ['Salvación', 'Engañar', 'Intimidación', 'Actuación', 'Persuasión'] },
    ]

    return (
        <Grid container columns={12} spacing={2} >
            {caracteristics.map((caracteristic) => (
                <Grid key={caracteristic.id} size={12} direction='row' sx={{ alignItems: 'center' }} border={1} borderRadius={2} borderColor={indigo[900]} padding={2}>
                    <Grid container columns={12}>
                        <Grid size={3} sx={{ alignItems: 'center', justifyContent: "center", }}>
                            <Stack direction='column' spacing={1} sx={{ alignItems: 'center' }}>
                                <Typography variant='h6'> {caracteristic.name} </Typography>
                                <Button variant="outlined">10</Button>
                            </Stack>
                        </Grid>
                        <Grid size={9}>
                            <Grid container direction='row' spacing={1} paddingLeft={2} columns={12} sx={{ alignItems: 'center' }} >
                                {caracteristic.skills.map((skill) => (
                                    <Grid size={6} key={skill}>
                                        <Stack direction='row' sx={{ alignItems: 'center' }} spacing={2}><Button variant="outlined"> +0 </Button> <Typography> {skill} </Typography></Stack>
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