import React, { useRef, useState } from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DrawerExample = () => {
  const drawerRef = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');

  const toggleDrawer = () => {
    drawerRef.current?.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current?.closeDrawer();
  };

  const navigationView = () => (
    <View style={styles.drawerContainer}>
      <Text style={styles.drawerTitle}>Menu</Text>
    </View>
  );

  const changeDrawerPosition = () => {
    setDrawerPosition((prevState) =>
      prevState === 'left' ? 'right' : 'left'
    );
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={250}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <Text style={styles.title}>MENÚ</Text>
        <Button title="ABRIR" onPress={toggleDrawer} />
        <Button
          title="CAMBIAR POSICIÓN"
          onPress={changeDrawerPosition}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 21,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 12,
  },
  drawerTitle: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default DrawerExample;