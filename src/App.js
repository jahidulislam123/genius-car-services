import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';


import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import ServiceDetails from './Pages/ServicesDetails/ServiceDetails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service/:servicesId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        
      <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
     
      <Footer></Footer>
     
      
    </div>
  );
}

export default App;
