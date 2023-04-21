import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, ScrollView, ImageBackground } from 'react-native';

export default function componente_switch() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [background, setBackground] = useState('#FFFFFF');
  const [infoText, setInfoText] = useState(<Text style={[styles.infoText, {color: 'black'}]}>El switch está desactivado</Text>);
  const [tableVisible, setTableVisible] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setBackground(isEnabled ? '#FFFFFF' : '#000000');
    setTableVisible(!tableVisible);
    if (isEnabled) {
      setInfoText(<Text style={[styles.infoText, {color: 'white'}]}>El switch está desactivado</Text>);
    } else {
      setInfoText(<Text style={[styles.infoText, {color: 'blue'}]}>El switch está activado</Text>);
    }
  };

 return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={require('./fondos/a2.png')} style={{ flex: 1 }}>
  <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1 }}></View>
      <Text style={[styles.title,{color: 'black'}]}>Esta es la explicacion del componente Switch</Text>
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{ false: "#764577", true: "#white" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.infoText}>{infoText}</Text>
      </View>
      {tableVisible && (
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCell, styles.tableHeaderText,{color: 'black'}]}>Que es switch</Text>
          </View>
          <View style={styles.tableBody}>
            <Text style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableCellText, {color: 'black'}]}>
  En React Native, el switch es un componente que permite al usuario seleccionar una opción entre dos mutuamente excluyentes. 
  Es similar a un botón de radio y se utiliza para representar valores booleanos como "encendido" o "apagado". Al tocar el switch, 
  su estado interno cambia automáticamente y se puede proporcionar una función de devolución de llamada para manejar los cambios en su valor.
</Text>
            </Text>
          </View>

          <View style={styles.tableHeader}>
            <Text style={[styles.tableCell, styles.tableHeaderText,{color: 'black'}]}>Para que sirve</Text>
          </View>

          <View style={styles.tableBody}>
            <Text style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableCellText,{color: 'black'}]}>En React Native, el switch es un componente 
              que permite al usuario seleccionar una opción entre dos mutuamente excluyentes. Es similar a un botón 
              de radio y se utiliza para representar valores booleanos como "encendido" o "apagado". Al tocar el 
              switch, su estado interno cambia automáticamente y se puede proporcionar una función de devolución de 
              llamada para manejar los cambios en su valor.</Text>
            </Text>

          </View>

          <View style={styles.tableHeader}>
            <Text style={[styles.tableCell, styles.tableHeaderText,{color: 'black'}]}>Como se integra</Text>
          </View>

          <View style={styles.tableBody}>
            <Text style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableCellText,{color: 'black'}]}>Para integrar un switch en una aplicación de React 
              Native, se debe agregar el componente Switch en el código de la pantalla o componente donde se desea utilizar. 
              Luego, se puede proporcionar una función de devolución de llamada para manejar los cambios en el valor del switch. 
              El Switch tiene varias propiedades que se pueden utilizar para personalizar su apariencia y comportamiento, como
               value, onValueChange, thumbColor, trackColor, entre otras.</Text>
            </Text>
            <Text style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.tableCellText,{color: 'red'}]}>Fila 2, Columna 1</Text>
              <Text style={[styles.tableCell, styles.tableCellText,{color: 'blue'}]}>Fila 2, Columna 2</Text>
              <Text style={[styles.tableCell, styles.tableCellText,{color: 'yellow'}]}>Fila 2, Columna 3</Text>
            </Text>
          </View>

           </View>
         )}
</ImageBackground>
</ScrollView>
     );
   }

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoText: {
    marginLeft: 10
  },
  tableContainer: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: '90%'
  },
  tableHeader: {
    backgroundColor: '#eee',
    flexDirection: 'row'
  },
  tableHeaderText: {
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    paddingVertical: 10
  },
  tableBody: {
    flexDirection: 'column'
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10
  },
  tableCell: {
    flex: 1,
    padding: 5,
    textAlign: 'center'
  },
  tableCellText: {
    textAlign: 'justify'
  }
});