import React , {useState} from 'react';
import {Routes , Route} from "react-router-dom"
import './App.css';
import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import ProfilePage from './Pages/ProfilePage';
import ShopPage from './Pages/ShopPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProductPage from './Pages/ProductPage';
import Footer from './components/Common/Footer';
import Error from './Pages/Error';


function App() {
       
  const [cat , setCat] = useState([]);

  return (
    <div className="App">
     <Routes>

      <Route exact path='/' element={<HomePage setCat={setCat} />} />
     
     
      <Route path='/cart' element={<CartPage />} />
      {/* <ProtectedRoute path='/cart' element={<CartPage />} /> */}
     
      <Route path='/login' element={<LoginPage />} />
     
     
      <Route path='/signup' element={<SignupPage />} />
     
     
      <Route path='/profile' element={<ProfilePage />} />


      <Route path='/product/:id' element={<ProductPage />} />


      {/* <Route path='/product/:id' element={<ProductPage />} /> */}
     
     
      <Route path='/shop' element={<ShopPage cat={cat} setCat={setCat} />} />
     
     
      <Route path='/about' element={<AboutPage />} />
     
     
      <Route path='/contact' element={<ContactPage />} />

      <Route path="*" element={<Error />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
