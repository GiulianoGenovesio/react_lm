
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';
import HomePage from './pages/Homepage';
import Ejemplo01 from './pages/Ejemplo01';
/*importame el componente HomePage del archivo Homepage*/

function App() {
  return (
    <div className="App">
     {/*<Header></Header>*/}
     <Header/>
<BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/Ejemplo01' element={<Ejemplo01/>} />
      {/* aca van los link */}
     </Routes>
     </BrowserRouter>
     <Footer/>

    </div>
  );
}

export default App;
