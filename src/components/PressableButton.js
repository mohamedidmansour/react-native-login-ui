
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Pressable,
} from 'react-native';

export const PressableButton = ({ style, ...props }) => {
    const { text } = props
    return (
        <Pressable style={styles.pressable} {...props}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'purple',
        borderRadius:20,
        padding:15,
    },
    text: {
        color: 'black',
        fontFamily: 'Roboto',
        fontSize: 26,
        color:'#EEE',
    }
});