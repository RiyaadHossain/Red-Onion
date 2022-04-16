
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Components/Auth/SignIn/SignIn';
import SignUp from './Components/Auth/SignUp/SignUp';
import Cart from './Components/Cart/Cart';

import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Navbar />
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/cart' element={<RequireAuth><Cart/></RequireAuth> }/>
        <Route path='/signin' element={ <SignIn/>}/>      
        <Route path='/signup' element={<SignUp />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
