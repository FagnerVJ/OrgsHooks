/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

import estrela from '../../assets/images/estrela.png';
import estrelaCinza from '../../assets/images/estrelaCinza.png' 

// eslint-disable-next-line prettier/prettier
const Estrela = ({ 
    onPress, 
    desabilitada,
    preenchida, 
}) => {
    const getImagem = () =>{
        if (preenchida){
            return estrela;
        } 
        return estrelaCinza;
    }

    return<TouchableOpacity
        onPress={onPress}
        disabled={desabilitada}
    >
        <Image source={getImagem()} style={estilos.estrela} />
    </TouchableOpacity>

}

export default Estrela;

const estilos = (grande) => StyleSheet.create({
    estrelas:{
        flexDirection: 'row',
    },
    estrela:{
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2,
    }
})