/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  Alert,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const createThreeButtonAlert = () =>
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Ask me later',
      onPress: () => console.log('Ask me later pressed'),
    },
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {
      text: 'OK',
      onPress: () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json => console.log(json));
      },
    },
  ]);

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Text>Hello ReactNative App!</Text>
        <Button
          color="#f194ff"
          onPress={createThreeButtonAlert}
          title="Learn More"
          accessibilityLabel="Learn more about this purple button"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
