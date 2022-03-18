/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Home from './src/telas/Home';

const App = () => {
  // eslint-disable-next-line prettier/prettier
  return(<SafeAreaView style = {estilos.tela}>
      <Home />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
    tela:{
      flex: 1,//Coloca srcoll na tela inteira
    }
})

export default App;