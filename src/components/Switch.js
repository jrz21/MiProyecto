import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';


const Ejswitch = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleBackground = () => setIsDarkMode(previousState => !previousState);

  const backgroundColor = isDarkMode ? 'black' : '#FFFFFF';

  const buttonIcon = isDarkMode ? '🌞' : '🌛'; 
 
  const buttonTextColor = isDarkMode ? '#FFFFFF' : '#000000';

  return (
    <View style={[styles.container, {backgroundColor} ]}>
  
      <TouchableOpacity style={styles.button} onPress={toggleBackground}>
        <Text style={{ color: buttonTextColor, fontSize: 20 }}>
          {buttonIcon}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 
  container: {
    flex:1,
    marginTop:55,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 50,
    right: 100,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#DDDDDD',
  },

}); 

export default Ejswitch;
