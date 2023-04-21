import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View, Text, Dimensions } from 'react-native';
import Switch from './src/components/Switch';
import DrawerExample from './src/components/drawerLayoutAndroid';
import Touchable from './src/components/touchableWithoutFeedback';
import Vmodal from './src/components/modal';
import ActivityIndicatorEj from './src/components/activityIndicator';
import UseColorExample from './src/APIs/useColorScheme';
import UseWindowsDimensionsExample from './src/APIs/useWindowsDimensions';

const windowWidth = Dimensions.get('window').width;

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <UseColorExample />
           <Touchable />
          <DrawerExample />
          <ActivityIndicatorEj />
          <Vmodal />
          <Switch />
          <UseWindowsDimensionsExample />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
      <ScrollView horizontal>
        <View style={[styles.content, styles.horizontalContent]}>
          <UseColorExample />
           <Touchable />
          <DrawerExample />
          <ActivityIndicatorEj />
          <Vmodal />
          <Switch />
          <UseWindowsDimensionsExample />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  horizontalContent: {
    flexDirection: 'row',
    width: windowWidth * 2,
  },
});

export default App;