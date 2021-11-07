import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';

function App() {
  
  return (
    <PageWrapper>

      <Pelicula titulo="Tomas el ultimo humano" calificacion="10" director="Maria Rocio Cueltan" actores="Heydi Escobar, Freider Escobar, Tomas Escobar" fecha="1 May 2020" duracion="3h22" img="images/uploads/mv1.jpg">
        Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...
      </Pelicula>

    </PageWrapper>
  );
}

export default App;
