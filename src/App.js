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
import Register from './Pages/Login/Register/Register';
import Cheackout from './Pages/CheackOut/CheackOut/Cheackout';
import RequreAuth from './Pages/Login/RequirAuth/RequreAuth';
import AddService from './Pages/AddServie/AddService';
import ManageServices from './Pages/ManageService/ManageServices';


function App() {
  return (
    <div >
      <Header></Header>
      {/* <AddService></AddService> */}
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service/:servicesId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        
        <Route path="/checkout" element={
          <RequreAuth>
            <Cheackout></Cheackout>
          </RequreAuth>
        }></Route>
        <Route path="/addservice" element={
          <RequreAuth>
            <AddService></AddService>
          </RequreAuth>
        }></Route>
        <Route path="/manage" element={
          <RequreAuth>
            <ManageServices></ManageServices>
          </RequreAuth>
        }></Route>
      <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
     
      <Footer></Footer>
      
     
      
    </div>
  );
}

export default App;
