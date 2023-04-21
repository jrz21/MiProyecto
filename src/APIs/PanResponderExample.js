import React, { useRef } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';

const PanResponderExample = () => {
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        // Manejar el gesto de desplazamiento aquí
      },
    })
  ).current;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {/* Contenido del componente aquí */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default PanResponderExample;