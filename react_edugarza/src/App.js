//const App = () => "Hola Mundo con App Importado"

//export default App 

import Header from "./Componentes/Header"
import NavBar from "./Componentes/NavBar"
import Main from "./Componentes/Main"
import Footer from "./Componentes/Footer"

const App = () => {

  const persona={
    nombre:"Eduardo",
    edad:"26"
  }
  const nombre = "Eduardo"


  return (
    <>
      <Header nombre ={nombre}/>
      <NavBar/>
      {/*<Main nombre="Eduardo" edad={26}/>*/}
      <Main nombre={["Eduardo", "Garza", "Serramo"]} />
      <Footer/>
    </>
  )
}

export default App