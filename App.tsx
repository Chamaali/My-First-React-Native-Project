import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const App = () => {
  const [message, setMessage] = useState('Hello World !');

  const onClickChangeMessage = () => {
    setMessage('Lets Get Started !');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{message}</Text>
      <Button title='Next' onPress={onClickChangeMessage}></Button>
    </View>
  )
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#99ccff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  text: {
    color: '#00000',
    fontSize: 40,
    fontStyle: 'bold',
    margin: 40
  }
});

export default App