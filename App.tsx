import React, { useState ,FC} from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,} from 'react-native';
import Login from './src/login'
import Stacknavigation from './src/navigation/stacknavigation';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
const App: FC = () => {
    return (
        <Provider store={store}>
            <Stacknavigation/>
        </Provider>
    );
};



export default App;
