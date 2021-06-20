import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, Pressable, Text} from 'react-native';
import {Input} from '../components/Input';
import {TextScreen} from '../components/TextScreen';
import {PressableButton} from '../components/PressableButton';

export const LoginUI = () => {
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const onSendAuthentication = () => {
    console.log(userEmail, userPassword);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginTextContainer}>
        <TextScreen style={styles.text} text={'Login'} />
        <Input
          placeholder={'Email'}
          keyboardType={'email-address'}
          style={styles.input}
          value={userEmail}
          onChangeText={setUserEmail}
        />
        <Input
          placeholder={'Password'}
          secureTextEntry
          style={styles.input}
          value={userPassword}
          onChangeText={setUserPassword}
        />
        <PressableButton
          text="Connexion"
          onPress={() => {
            onSendAuthentication();
          }}
        />
        <Pressable style={styles.pressable}>
          <Text style={styles.smallText}>
            I don't have an account, create one!
          </Text>
        </Pressable>
      </View>
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
  loginTextContainer: {
    borderColor: '#fff',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    height: 'auto',
  },
  text: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 36,
    marginBottom: 50,
    textTransform: 'uppercase',
  },
  input: {
    color: 'black',
    fontFamily: 'Roboto',
    height: 30,
  },
  pressableButton: {
    fontSize: 10,
  },
  pressable: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 15,
  },
  smallText: {
    color: 'purple',
    fontSize: 18,
    fontFamily: 'Roboto',
  },
});
