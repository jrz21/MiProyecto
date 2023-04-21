import React from 'react';
import { View, Text, Button, ImageBackground, ScrollView } from 'react-native';

export default function MainPage({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <ImageBackground source={require('./fondo.png')} style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1 }}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 100 }}>
            Esta es para ver los componentes en conjunto
          </Text>
          <Button
            title="Ir a a los componentes"
            onPress={() => navigation.navigate('Menu')}
          />
          <Text style={{ color: 'white' }}>Esta es el componente Switch</Text>
          <Button
            title="Ir a Switch"
            onPress={() => navigation.navigate('Switch')}
          />
          <Text style={{ color: 'white' }}>Esta es la explicacion de los demas componentes</Text>
          <Button
            title="Ir a Explicacion"
            onPress={() => navigation.navigate('Resto')}
          />
           <Text style={{ color: 'white' }}>Este es el juego Snake con react-native</Text>
          <Button
            title="Ir a Snake"
            onPress={() => navigation.navigate('snake')}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}