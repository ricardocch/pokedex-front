import './App.css';
import {Routes,Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Detail from './components/Detail/Deatail';

function App() {
  
  return (
    <div className="App">
      
        <Nav/>
        <Routes>
          <Route exact path="/Home" element={<Home/>}/>
          <Route exact path="/detail/:id" element={<Detail/>}/>
          <Route exact path="/detail" element={<Detail/>}/>
          <Route path="/*" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
