import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import peliculasJson from './peliculas.json'

function App() {

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

    </PageWrapper>
  );
}

export default App;
