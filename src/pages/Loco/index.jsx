import './index.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Loco() {
  const [texto, SetTexto] = useState('');
  const [cor, SetCor] = useState('');
  return (
    
    <div className="App" style={{ backgroundColor: cor }}>

      <Link to='/contato'>
        <p className='link'>Vai conhecer o Loco</p>
      </Link>

      <input className='texto'
        type="text"
        placeholder="Coloque seu texto aqui..."
        name=''
        id=''
        onChange={
          (e) => SetTexto(e.target.value)}
      />


<div style={{ backgroundColor: cor }}>
         <input 
        type="color"
        name=''
        id=''
        onChange={
          (e) => SetCor(e.target.value)}
      />
</div>

      <h1>{texto}</h1>



    </div>
  );
}