
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

export const TextScreen = ({style, ...props}) => {
  const {text} = props
  return (
    <Text {...props} style={styles.text, style}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color:'black',
    fontFamily:'Roboto',
    fontSize: 40,
    textTransform:'uppercase',
  }
});