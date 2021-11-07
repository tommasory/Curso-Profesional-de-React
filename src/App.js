import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import peliculasJson from './peliculas.json'
import Paginacion from './Paginacion';
import { useState } from 'react';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);

  let peliculas = peliculasJson;
  
  // * Utilizamos el MAP para recorrer el vector de peliculas ya que este nos permite ir por cada uno de los elementos y retornandolo a la vez.
  // * Si se pone llaves hay que especificar el return, de lo contrario no.
  return (
    <PageWrapper>
      {peliculas.map(pelicula =>
        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
          {pelicula.descripcion}
        </Pelicula>
      )}

      <Paginacion pagina={paginaActual} total={4} onChange={(pagina) => {
        // Cuando llamamos a setPaginaActual le decimos que se tiene que renderizar
        // y ademas de cambiar el valor. El valor de pagina actual va a cambiar con el que se haya recibido al hacer el clic y asu vez renderiza el componente. en este caso el componente Paginacion.
        setPaginaActual(pagina)
      }}/>

    </PageWrapper>
  );
}

export default App;
