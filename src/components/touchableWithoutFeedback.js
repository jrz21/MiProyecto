import React, {useState} from 'react';
import {StyleSheet, TouchableWithoutFeedback, Text, View} from 'react-native';

const Touch = () => {
  const [count, setCount] = useState(0);

  const aumento = () => {
    setCount(count + 1);
  };

  const decremento = () => {
    setCount(count - 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>CONTADOR: {count}</Text>
      </View>

      <TouchableWithoutFeedback onPress={aumento}>
        <View style={styles.buttonA}>
          <Text style={styles.texto}>AUMENTAR!</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.space}></View>

      <TouchableWithoutFeedback onPress={decremento}>
        <View style={styles.buttonD}>
          <Text style={styles.texto}>DECREMENTAR!</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  texto:{
    fontWeight: 'bold'
  },
  buttonA: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  buttonD: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
    fontWeight: 'bold'
  },
  space: {
    height: 20,
  },
});

export default Touch;