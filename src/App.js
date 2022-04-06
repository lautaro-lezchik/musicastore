import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  
  return (
    <>
      <Navbar />
      <ItemDetailContainer />
      <ItemListContainer greeting="Bienvenido a MusicaStore ItemListContainer!" />
    </>
  );
}

export default App;
