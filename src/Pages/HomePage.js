import React from 'react'
import Home from '../components/Home';
import Header from '../components/Common/Header';


const HomePage = ({setCat}) => {
  return (
    <div className="HomePage">
      <Header />
      <Home setCat={setCat} /> 
    </div>
  )
}

export default HomePage