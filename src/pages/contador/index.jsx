import './index.scss'
import { useState } from 'react'

export default function Contador() {
    const [contador, setcontador] = useState(0);
    const [num6, setnum6] = useState("");
    const [num7, setnum7] = useState("");

    const [resp, setresp] = useState("");

    const [titulo1, settitulo1] = useState("");

    const [titulo2, settitulo2] = useState(false);

    const [titulo3, settitulo3] = useState("Roblox")

    const [descricao, setdescricao] = useState("")




    function menos() {
        setcontador(contador - 1);
    }
    function mais() {
        setcontador(contador + 1);
    }

    if (contador < 0) {
        setcontador(0)
    }

    if (contador > 20) {
        setcontador(20)
    }

    function somar() {
        let soma = Number(num6) + Number(num7)
        setresp(soma);

    }



    function alterartitulo1(e) {
        let novovalor = e.target.value;
        settitulo1(novovalor);

    }


    function alterartitulo3(e) {
        let novovalor = e.target.value;
        settitulo3(novovalor);

    }


    function alterardescricao(e) {

        setdescricao(titulo3);

    }


    return (
        <div className='cont'>
            <section className='conta'>
                <button onClick={menos}>-</button>
                <h1>{contador}</h1>
                <button onClick={mais}>+</button>
            </section>

            <section className='section'>
                <div>
                    <input type="text" value={num6} onChange={(e) => setnum6(e.target.value)} />
                    <input type="text" value={num7} onChange={(e) => setnum7(e.target.value)} />
                    <button onClick={somar}>Somar</button>
                    <p>Resultado: {resp}</p>
                </div>


            </section>



            <section className="section">
                <h2>{titulo1}</h2>
                <input type="text" onChange={alterartitulo1} />

            </section>
            <hr />
            <section className="section">
                <div className="b">
                    <h2>{descricao}</h2>
                    <input type="text" onChange={alterartitulo3} />
                    <button onClick={alterardescricao}>Enviar</button>
                </div>

                <h2>{titulo2 ? "Sim" : "Não"}</h2>
                <input
                    type="checkbox"
                    onChange={(e) => settitulo2(e.target.checked)}
                    name=""
                    id=""
                />
            </section>

        </div>
    )
}