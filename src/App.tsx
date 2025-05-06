
import { Stack } from '@mui/material'
import './App.css'
import Header from './componentes/Header'
import MainContainer from './componentes/MainContainer'

function App() {

  return (
    // <Container>
    <Stack>
      <Header name="Pepe Chulo" clase="Cleric" race="Human" level={3} />
      <MainContainer />
    </Stack>
    // </Container>


  )
}

export default App
