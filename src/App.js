import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';


import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>

      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
