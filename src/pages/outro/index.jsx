
import { useState } from 'react';
import './index.scss';
import Cabecalho from '../componentes/index';
import axios from 'axios';

export default function ChamarAPI() {
    const [cep, setcep] = useState('');
    const [endereco, setEndereco] = useState('');

    async function buscarCep() {
        try {
            let url = `https://viacep.com.br/ws/${cep}/json/`;
            let resp = await axios.get(url);

            let dados = resp.data;

            if (dados.erro) {
                setEndereco('CEP não encontrado!');
                return;
            }

            let msg = dados.logradouro + ' - ' +
                dados.bairro + ' - ' +
                dados.localidade + ' - ' +
                dados.uf;

            setEndereco(msg);
        } catch (erro) {
            setEndereco('Erro ao buscar o CEP.');
        }
    }

    return (
        <div className="chamadaAPI">
            <Cabecalho titulo="Chamada API" />

            <div className="Input">
                <input
                    type="text"
                    value={cep}
                    onChange={(e) => setcep(e.target.value)}
                    placeholder="Digite o CEP"
                />
                <button onClick={buscarCep}>
                    Buscar
                </button>

                <p>{endereco}</p>
            </div>
                
           
        </div>
    );
}
