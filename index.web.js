import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// También permite que funcione igual en Expo Go, una compilación nativa o web.
registerRootComponent(App);
