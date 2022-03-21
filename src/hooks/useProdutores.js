/* eslint-disable prettier/prettier */
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
import { useState, useEffect } from 'react';
import { carregaProdutores } from '../Servicos/carregarDados';

export const useProdutores = () => {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);


    useEffect(() => {
        const retorno = carregaProdutores();
        retorno.lista.sort((produtor1, produtor2) => produtor1.distancia - produtor2.distancia,);
        //retorno.titulo.sort((title1, title2) => title1.titulo - title2.titulo,);
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    },[]);

    return [titulo, lista];
};
