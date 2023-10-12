import React from 'react'
import Shop from '../components/Shop'

const ShopPage = ({cat , setCat}) => {
  return (
    <div className='ShopPage'>
      <Shop cat={cat} setCat={setCat}/>
    </div>
  )
}

export default ShopPage