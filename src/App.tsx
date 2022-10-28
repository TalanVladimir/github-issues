/**
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { ThemeProvider } from './themes/ThemeProvider';

import { Home } from './components/Home';

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <Home />
        </SafeAreaView>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
