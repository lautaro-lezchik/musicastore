import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a MusicaStore ItemListContainer!" />
    </>
  );
}

export default App;
