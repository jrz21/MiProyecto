import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

const UseColorExample = () => {
  const [theme, setTheme] = useState('light');
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (colorScheme === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [colorScheme]);

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Text style={[styles.text, {color: theme.textColor}]}>Hello, world!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  light: {
    backgroundColor: '#FFF',
    textColor: '#000',
  },
  dark: {
    backgroundColor: '#000',
    textColor: '#FFF',
  },
});

export default UseColorExample;
