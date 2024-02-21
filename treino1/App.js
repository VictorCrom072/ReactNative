import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [numero, setNumber] = useState(Number(0))
  function mais1(){
    return setNumber(numero + 1);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={mais1} style={styles.button}>
        <Text style={styles.text}>ADICIONAR MAIS UM</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{numero}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "grey",
    margin: 20,
    fontSize: 30
  },
  button:{
    backgroundColor: "purple"
  }
});
