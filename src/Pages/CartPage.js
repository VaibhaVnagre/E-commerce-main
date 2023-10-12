import React from 'react'
import Cart from '../components/Cart'
import Header from '../components/Common/Header'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

const CartPage = () => {
  return (
    <div className='CartPage'>
      <Header />
      <Cart />
    </div>
  )
}

export default CartPage