import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
//import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/' element= {<ItemListContainer />} />  */}
          <Route path='/' element= {<ItemDetailContainer />} /> 
        </Routes>
      </BrowserRouter>
  );
}

export default App;

