import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import peliculasJson from './peliculas.json'
import Paginacion from './Paginacion';
import { useState } from 'react';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 7

  let peliculas = peliculasJson;

  const getTotalPaginas = () => {
    let cantidadTotal = peliculasJson.length;
    // Redondea hacia arriba
    return Math.ceil(cantidadTotal / TOTAL_POR_PAGINA);
  }

  // Para colocar la paginación de 5 imagenes por paginas
  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual -1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    )
  }

  cargarPeliculas()
  
  // * Utilizamos el MAP para recorrer el vector de peliculas ya que este nos permite ir por cada uno de los elementos y retornandolo a la vez.
  // * Si se pone llaves hay que especificar el return, de lo contrario no.
  return (
    <PageWrapper>
      {peliculas.map(pelicula =>
        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
          {pelicula.descripcion}
        </Pelicula>
      )}

      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        // Cuando llamamos a setPaginaActual le decimos que se tiene que renderizar
        // y ademas de cambiar el valor. El valor de pagina actual va a cambiar con el que se haya recibido al hacer el clic y asu vez renderiza el componente. en este caso el componente Paginacion.
        setPaginaActual(pagina)
      }}/>

    </PageWrapper>
  );
}

export default App;
