import { AppRegistry } from 'react-native';
import App from '../../App';

const MyRootComponent = () => {
  return <App />;
}

AppRegistry.registerComponent('App', () => MyRootComponent);