import React, { useState } from 'react';
import './app.css'

const Nest = ({ title, desc, director, mainR }) => {
  const [isActive, setIsActive] = useState(false);
  const [showDesc, setshowDesc] = useState(false);
  const [showDir, setshowDir] = useState(false);
  const [showAct, setshowAct] = useState(false);

return (
  <li>
    
  <input
      type="checkbox"
      name={title}
      value={title}
      checked={isActive}
      onChange={() => setIsActive(!isActive)}
    />
      <label className='title'> {title} </label> 
    

    {isActive &&
      <li className='child'>
      <input
        type="checkbox"
        name={desc}
        value={desc}
        checked={showDesc}
        onChange={() => setshowDesc(!showDesc)}
        />
          <label> Pokaż opis </label>
      </li> 
    }
      {showDesc && <li className={isActive ? null : 'collapsed'}><p className='child'>{desc}</p></li>}
      {isActive && 
        <li className='child'>
          <input 
          type="checkbox" 
          name={director} 
          value={director} 
          checked={showDir}
          onChange={() => setshowDir(!showDir)}
          /> 
            <label> Reżyseria </label>  
        </li>
        }
      {showDir && <li className={isActive ? null : 'collapsed'}> <p className='child'>{director} </p></li>}
      {isActive && 
        <li className='child'>
          <input 
          type="checkbox" 
          name={mainR} 
          value={mainR} 
          checked={showAct}
          onChange={() => setshowAct(!showAct)}/> 
            <label> W rolach głównych </label>  
        </li>
        }
      {showAct && <li className={isActive ? null : 'collapsed'}> {mainR.map((mainR) => <li className='child'> <p> {mainR} </p> </li>)} </li>}
  </li>
);
};

export default Nest;


