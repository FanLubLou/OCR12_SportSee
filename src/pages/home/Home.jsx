import React from 'react';
import { Link } from 'react-router-dom';

export default function home() {
  return (
    <div className='homeProduction'>
      <h1>Production</h1>
      <div className='homeProductionLink'>      
        <Link to="/user/12">Karl</Link> 
        <Link to="/user/18">Cecilia</Link>
      </div>
    </div>

  )
}
