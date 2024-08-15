import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ${1:Description placeholder}
 *
 * @export
 * @returns {${2:*}}
 */
export default function home() {
  return (
    <div className='homeProduction'>
      <h1>Production</h1>
      <div className='homeProductionLink'>      
        <Link to="/user/12">Utilisateur 12</Link> 
        <Link to="/user/18">Utilisateur 18</Link>
      </div>
      <h1>Developpement</h1>
      <div className='homeDevelopmentLink'>      
        <Link to="/user/1">Utilisateur 1</Link> 
        <Link to="/user/2">Utilisateur 2</Link> 
        <Link to="/user/3">Utilisateur 3</Link> 
        <Link to="/user/4">Utilisateur 4</Link> 
        <Link to="/user/5">Utilisateur 5</Link> 
        <Link to="/user/6">Utilisateur 6</Link> 
        
      </div>
    </div>

  )
}
