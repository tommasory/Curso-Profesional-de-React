import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import { useEffect, useState } from 'react';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const TOTAL_POR_PAGINA = 7

  // Con esto consegumos que cada que se recargue la pagina, esta ejecutara la funcion buscarPeliculas().
  useEffect(() => {
    buscarPeliculas()
  }, [])

  // * Con "async" indicamos que la funcion es asincronica
  // * Con "await" le decimos que tiene que esperar la respuesta así se demore, debido que estamos esperanbdo una respuesta de tipo sincronica.
  const buscarPeliculas = async () => {
    const URL = 'https://lucasmoy.dev/data/react/peliculas.json'
    try {
      const response = await fetch(URL);
      //console.log(response.status);
      if (response.status === 200)
        setPeliculas(await response.json());
    } catch (error) {
      console.log(error);
    }
  };

  // Está funcion me permite calcular las paginaciones segun el numero de peliculas. 
  const getTotalPaginas = () => {
    let cantidadTotal = peliculas.length;
    // Redondea hacia arriba
    return Math.ceil(cantidadTotal / TOTAL_POR_PAGINA);
  }
  // Para colocar la paginación de TOTAL_POR_PAGINA imagenes por paginas
  let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * TOTAL_POR_PAGINA,
    paginaActual * TOTAL_POR_PAGINA
  )

  // * Utilizamos el MAP para recorrer el vector de peliculas ya que este nos permite ir por cada uno de los elementos y retornandolo a la vez.
  // * Si se pone llaves hay que especificar el return, de lo contrario no.
  return (
    <PageWrapper>
      {peliculasPorPagina.map(pelicula =>
        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
          {pelicula.descripcion}
        </Pelicula>
      )}

      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        // Cuando llamamos a setPaginaActual le decimos que se tiene que renderizar
        // y ademas de cambiar el valor. El valor de pagina actual va a cambiar con el que se haya recibido al hacer el clic y asu vez renderiza el componente. en este caso el componente Paginacion.
        setPaginaActual(pagina)
      }} />

    </PageWrapper>
  );
}

export default App;
