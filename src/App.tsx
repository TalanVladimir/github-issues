/**
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { ThemeProvider } from './themes/ThemeProvider';

import { Home } from './components/Home';
import { Status } from './components/Status';

const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <SafeAreaView>
          <Status />
          <Home />
        </SafeAreaView>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
