import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, ScrollView, ImageBackground } from 'react-native';

export default function Resto() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [background, setBackground] = useState('#FFFFFF');
  const [infoText, setInfoText] = useState(<Text style={[styles.infoText, {color: 'black'}]}>El switch está desactivado</Text>);
  const [tableVisible, setTableVisible] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setBackground(isEnabled ? '#FFFFFF' : '#000000');
    setTableVisible(!tableVisible);
    if (isEnabled) {
      setInfoText(<Text style={[styles.infoText, {color: 'blue'}]}>El switch está desactivado</Text>);
    } else {
      setInfoText(<Text style={[styles.infoText, {color: 'black'}]}>El switch está activado</Text>);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={require('./fondos/a1.png')} style={{ flex: 1 }}>
  <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1 }}></View>
      <Text style={[styles.tableCell, styles.tableCellText, {color: 'black'}]}>Esta es la explicacion de los demas componentes</Text>
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
  <Text style={[styles.tableCell, styles.tableCellText, {color: 'black'}]}>ScrollView</Text>
           </View>
           <View style={styles.tableBody}>
             <Text style={styles.tableRow}>
             <Text style={[styles.tableCell, styles.tableCellText, {color: 'white'}]}>ScrollView de React Native se utiliza
               para implementar vistas con desplazamiento, lo que significa que puede desplazarse hacia arriba o hacia
               abajo para ver más contenido que no cabe en la pantalla. Este componente es útil cuando se necesita mostrar una
               gran cantidad de contenido, como una lista de elementos o una sección de comentarios, y se desea permitir que el usuario
               desplace el contenido para ver más información.</Text>
             </Text>
           </View>

          <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.tableCellText, {color: 'black'}]}>DrawerLayoutAndroid</Text>
          </View>
          <View style={styles.tableBody}>
            <Text style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableCellText, {color: 'white'}]}>Es un componente que
              proporciona una vista deslizable para la navegación en la aplicación. Puede
              definirse en un archivo separado y agregarse a la aplicación según sea necesario.</Text>
            </Text>
          </View>

          <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.tableCellText, {color: 'black'}]}>TouchableWithoutFeedback</Text>
          </View>

          <View style={styles.tableBody}>
            <Text style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableCellText, {color: 'white'}]}>Es un componente que permite
            detectar interacciones táctiles sin proporcionar ningún feedback visual. Puede
            definirse en un archivo separado y reutilizarse en diferentes partes de la aplicación.</Text>
            </Text>

          </View>

          <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.tableCellText, {color: 'black'}]}>RootTag</Text>
          </View>
          <View style={styles.tableBody}>
            <Text style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableCellText, {color: 'white'}]}>Es una propiedad que se
              utiliza para especificar la etiqueta de la vista raíz de la aplicación. No es
              un componente en sí mismo, sino una propiedad que se puede definir en un archivo
              separado y usarse en la configuración de la aplicación.</Text>
            </Text>
          </View>

          <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.tableCellText, {color: 'black'}]}>PanResponder</Text>
          </View>

          <View style={styles.tableBody}>
            <Text style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableCellText, {color: 'white'}]}>Es un sistema de gestos
            que permite detectar y responder a los gestos de desplazamiento, pinchado, rotación,
            etc. Puede definirse en un archivo separado y reutilizarse en diferentes partes de la
            aplicación donde se requieran interacciones basadas en gestos.</Text>
            </Text>

          </View>



          <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.tableCellText, {color: 'black'}]}>useColorScheme</Text>
          </View>
          <View style={styles.tableBody}>
            <Text style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableCellText, {color: 'white'}]}>Es un hook que devuelve
              el esquema de color preferido del usuario (claro o oscuro). Puede definirse en
              un archivo separado y usarse en diferentes partes de la aplicación donde se requiera
              un comportamiento personalizado basado en el esquema de color del usuario.</Text>
            </Text>
          </View>

          <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.tableCellText, {color: 'black'}]}>useWindowDimensions</Text>
          </View>

          <View style={styles.tableBody}>
            <Text style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableCellText, {color: 'white'}]}>Es un hook que devuelve
            las dimensiones de la ventana de la aplicación. Puede definirse en un archivo
            separado y usarse en diferentes partes de la aplicación donde se requieren dimensiones
            de ventana específicas.</Text>
            </Text>

          </View>

          <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.tableCellText, {color: 'black'}]}>Systrace</Text>
          </View>

          <View style={styles.tableBody}>
            <Text style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableCellText, {color: 'white'}]}>Es una herramienta de diagnóstico
            que se utiliza para medir el rendimiento de la aplicación. No es un componente ni una función,
            sino una herramienta que se utiliza en el proceso de desarrollo de la aplicación.</Text>
            </Text>

          </View>

          <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.tableCellText, {color: 'black'}]}>ActivityIndicator:</Text>
          </View>
          <View style={styles.tableBody}>
            <Text style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableCellText, {color: 'white'}]}>Es un componente que muestra
            un indicador de carga animado. Puede definirse en un archivo separado y usarse en
            diferentes partes de la aplicación donde se requiera una indicación visual de que
            se está cargando algo.</Text>
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