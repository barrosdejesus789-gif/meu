import './index.scss'
import { useState } from 'react'

const ingresso = 250;

export default function Estudar() {
    const [qtd, setQtd] = useState(1);
    const [meia, setMeia] = useState(false);
    const [cupom, setCupom] = useState("");
    const [total, setTotal] = useState('');

    function PorraNaMinhaCara() {

        let valor = qtd * ingresso;

        if (meia) {
            valor = valor / 2;
        }
        if (cupom === 'PorraNaMinhaCara10') {
            valor = valor - (valor * 0.10);
        }

        setTotal(valor)
    }


return (

    <div className='Parque'>
        


        <div className='card'>
            <h1>VENDA INGRESSOS PARA O SHOW</h1>



            <div className='QTD'>

                <label>Quantidade de Ingressos:</label>
                <input type="Number" min="0" value={qtd} onChange={(e) => setQtd(e.target.value)} />
            </div>





            <div className='Meia'>
                <label>Meia entrada:</label>
                <input type="checkbox" value={meia} onClick={(e) => setMeia(e.target.checked)} />
            </div>




            <div className='Cupom'>
                <label>Digite o seu Cupom:</label>
                <input type="text" value={cupom} onChange={(e) => setCupom(e.target.value)} />
            </div>


            <div className='Comfirme'>
                <label></label>
                <button onClick={PorraNaMinhaCara} > Finalize</button>

            </div>

            <p className="total">O total é R$ {total}</p>
        </div>
    </div>



);
}