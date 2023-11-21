import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import RootNavigator from './src/navigation/RootNavigator';

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
    <PaperProvider theme={bottomNavBarTheme}>
      <RootNavigator />
    </PaperProvider>
  );
}

export default App;
