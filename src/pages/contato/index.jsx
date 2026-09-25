import './index.scss'


export default function Contato() {

   function Alterou(e) {
      let none = e.target.value
      alert("Você alterou o valor do input :" + none);
   }
    function Passou() {

      alert("Você Passou o Mouse ");
   }

   return (


      <div className='Conta'>

         <div className='contato'>
            <h1>Formulário</h1>
              <h2>Preencha o Formulário</h2>
      

            <input className='In' onChange={Alterou} type="text" placeholder="Digite algo aqui" />
            <input className='On' onChange={Alterou} type="date" placeholder='Coloque sua Data de Nascimento' />

            <select onChange={Alterou}>
               <option>Selecione</option>
               <option>Recursos Humanos</option>
               <option>Financeiro</option>
               <option>Marketing</option>
               <option>TI</option>
             
            </select>

             <div className="opcoes" onChange={Alterou}>

          <label >
            <input type="radio" name="opcao" />
            Efetivo
          </label>

          <label>
            <input type="radio" name="opcao" />
            Temporário
          </label>

          <label>
            <input type="radio" name="opcao" />
            Estagiário
          </label>

          <label>
            <input type="radio" name="opcao" />
            Jovem Aprendiz
          </label>

        </div>
<a className='Passe' onMouseMove={Passou} href="">PASSE O MOUSE AQUI</a>

            <a className='href' href="">ENVIAR</a>


         </div>
      </div>

   )


}