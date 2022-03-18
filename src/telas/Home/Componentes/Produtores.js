/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { carregaProdutores } from '../../../Servicos/carregarDados'; 
import Produtor from './Produtor';

const Produtores = ({ topo: Topo}) =>{
    const [title, setTitle] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() =>{
        const retorno = carregaProdutores();
        setTitle(retorno.title);
        setLista(retorno.lista);
    }, [])
    
    const TopoLista = () =>{
        return <>
            <Topo/>
            <Text style={estilos.titulo}>{title}</Text>
        </>
    }

    return(<>
            <FlatList
                data={lista}
                ListHeaderComponent={() =>  TopoLista()}
                keyExtractor={({nome}) => { nome }}
                renderItem={({item}) => <Produtor {...item} />}
            />
        </>
    );
}
export default Produtores;

const estilos = StyleSheet.create({
    titulo:{
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    }

})

// O useEffect tem dois parametros 
// 1º parametro é uma função do a gente quer executar no caso um metodo 
// 2º parametro um array vazio