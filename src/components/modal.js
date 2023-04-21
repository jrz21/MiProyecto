import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const Vmodal = () => {

  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.centeredView}>
      
      <Modal
        animationType="slide" 
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal ha sido cerrado.');
          setModalVisible(!modalVisible);
        }}>

        <View style={styles.centeredView}>

          <View style={styles.modalView}>
            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 100 }}>El componente Modal en React Native es un componente que se utiliza para mostrar contenido en una ventana emergente superpuesta a la pantalla principal de la aplicación. Es útil para mostrar información importante, solicitar confirmaciones o recopilar datos del usuario.

El componente Modal acepta varias propiedades, incluyendo visible (un valor booleano que indica si el modal está visible o no), animationType (el tipo de animación que se utiliza para mostrar y ocultar el modal) y onRequestClose (una función que se ejecuta cuando el usuario intenta cerrar el modal).

El modal se puede cerrar de varias maneras, como hacer clic en un botón dentro del modal o presionar el botón de retorno del dispositivo móvil. También es posible personalizar la apariencia del modal utilizando estilos y agregar cualquier contenido que se desee dentro del modal.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>VENTANA</Text>
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
  },
  modalView: {
    backgroundColor: 'yellow',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'purple',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Vmodal;