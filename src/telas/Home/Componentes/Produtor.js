/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Estrelas from '../../../componentes/estrelas';

const Produtor = ({nome, imagem, distancia, estrelas}) =>{
    const [ selecionado, setSelecionado ] = useState(false);

    return(<TouchableOpacity 
        style= {estilos.cartao}
        onPress={()=> setSelecionado(!selecionado)}>
        
        <Image source={ imagem } style={estilos.imagem} accessibilityLabel={nome}/>
        <View style={estilos.informacoes}> 
        <View>
                <Text style={estilos.nome}>{ nome }</Text>
                <Estrelas quantidade={estrelas}
                editavel={selecionado}
                grande={selecionado}
                />
            </View>
                <Text style={estilos.distancia}> { distancia } </Text>
            </View>
        </TouchableOpacity>
    )
}
export default Produtor;

const estilos = StyleSheet.create({
    cartao:{
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',

        //Estilo para Android
        elevation: 4,// eleva a sombra do componente

        //Estilo para Ios
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    imagem:{
        width:48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    informacoes:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome:{
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distancia:{
        fontSize: 12,
        lineHeight: 19,
    }
})