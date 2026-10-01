import './index.scss'
import { useState } from 'react'

export default function Contador() {
const[contador, setcontador]=useState(0);


function menos(){
    setcontador(contador -1);
}
function mais(){
    setcontador(contador +1);
}

if(contador < 0){
    setcontador(0)
}

if(contador > 20){
    setcontador(20)
}

return (
    <div className='cont'>
<section className='conta'>
    <button  onClick={menos}>-</button>
    <h1>{contador}</h1>
    <button onClick={mais}>+</button>
</section>
</div>

)




}