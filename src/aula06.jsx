import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class Aula06 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobrenome: ''
    };
  }

  pegaNome(texto) {
    if (texto.length > 0) {
      this.setState({ nome: "Bem vindo: " + texto });
    } else {
      this.setState({ nome: '' });
    }
  }

  pegaSobrenome(texto) {
    if (texto.length > 0) {
      this.setState({ sobrenome: "Sobrenome: " + texto });
    } else {
      this.setState({ sobrenome: '' });
    }
  }

  render() {
    return (
      <View style={styles.container}>
    
        <TextInput 
          style={styles.TextInput}
          placeholder='Digite seu nome:'
          underlineColorAndroid="transparent"
          onChangeText={this.pegaNome.bind(this)}
        />
        <Text style={styles.texto}>{this.state.nome}</Text>

        <TextInput 
          style={styles.TextInput}
          placeholder='Digite seu sobrenome:'
          underlineColorAndroid="transparent"
          onChangeText={this.pegaSobrenome.bind(this)}
        />
        <Text style={styles.texto}>{this.state.sobrenome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: { 
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  }
});