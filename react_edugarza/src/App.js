//const App = () => "Hola Mundo con App Importado"

//export default App 

import Header from "./Header"
import NavBar from "./Componentes/NavBar"
import Footer from "./Footer"

const App = () => {
  return (
    <>
      <Header/>
      <NavBar/>
      <Footer/>
    </>
  )
}

export default App