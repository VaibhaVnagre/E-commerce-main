import React from 'react'
import Header from '../Common/Header'
import Banner from './Banner'
import "./style.css";
import Category from '../Category';
import TopProducts from './TopProducts';
import Footer from '../Common/Footer';

const Home = ({setCat}) => {
  return (
    <div className='Home'>
        {/* <Header/> */}
        <Banner />
        <Category setCat={setCat}/>
        <TopProducts />
        
    </div>
  )
}

export default Home