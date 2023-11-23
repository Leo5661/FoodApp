import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import RootNavigator from './src/navigation/RootNavigator';
import {persistStore} from 'redux-persist';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from './src/redux/store';

const persister = persistStore(store);

const bottomNavBarTheme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: 'transparent',
  },
};

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <PaperProvider theme={bottomNavBarTheme}>
          <RootNavigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
