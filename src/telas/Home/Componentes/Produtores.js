/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
// import { carregaProdutores } from '../../../Servicos/carregarDados'; 
import Produtor from './Produtor';
import { useProdutores } from '../../../hooks/useProdutores';

const Produtores = ({ topo: Topo}) =>{
    const [titulo, lista] = useProdutores();

    const TopoLista = () =>{
        return <>
            <Topo/>
            <Text style={estilos.titulo}>{titulo}</Text>
        </>
    }

    return(<>
            <FlatList
                data={lista}
                ListHeaderComponent={() =>  TopoLista()}
                keyExtractor={({nome}) => {nome}}
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