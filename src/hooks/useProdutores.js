/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import { carregaProdutores } from '../Servicos/carregarDados';

export const useProdutores = () => {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    return [titulo, lista];

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    },[]);
}
