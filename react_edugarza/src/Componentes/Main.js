import React from 'react'

const Main = ({nombre:[uno]}) => {
   // console.log(props)
   //console.log(props.nombre)
   //console.log(props.edad)
   //const [uno, dos, tres] = nombre

  return (
    <main>
        <h2>Bienvenido {uno} a mi tienda online</h2>
        {/* <p>tu edad es {edad}</p> */}
     </main>
  );

}

export default Main