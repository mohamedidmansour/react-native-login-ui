import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>{/* <Text>Home</Text> */}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: '50%',
  },
});
