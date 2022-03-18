/* eslint-disable prettier/prettier */
//https://reactnative.dev/docs/image
//https://cursos.alura.com.br/course/react-native-utilizando-criando-hooks/task/99770

import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import logo from '../../../../assets/images/logo.png';
import { carregaTopo } from '../../../Servicos/carregarDados';

class Topo extends React.Component{

    state={
        //state guarda os dados do componente no caso o carregaTopo 
        topo:{
            boasVindas:'',
            legenda:'',
            label:'',
        }
    }
    // A função atualizaTopo retorna o metodo carrega topo
    atualizaTopo(){
        const retorno = carregaTopo();
        this.setState({ topo: retorno });//O setState retorna os dados
    }
    //O componente DidMount Carrega os dados uma vez só chamando a função
    componentDidMount(){
        this.atualizaTopo();
    } 

    render(){
    //const {label, boasVindas, legenda} = this.state.topo;
    return(<View style={estilos.topo}>
            <Image 
                style={estilos.imagem}
                source={logo}
                accessibilityLabel={this.state.topo.label}
                //accessibilityLabel={label}
            /> 
            <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
            {/* <Text style={estilos.boasVindas}>{boasVindas}</Text> */}
            <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
            {/* <Text style={estilos.legenda}>{legenda}</Text> */}
        </View>
        )
    }
}
export default Topo;

const estilos = StyleSheet.create({
    topo:{
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    imagem:{
       width: 70,
       height: 28,
    },
    boasVindas:{
        marginTop:24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color:'#464646',
    },
    legenda:{
        fontSize: 16,
        lineHeight: 26,
        color:'#A3A3A3',
    },
});