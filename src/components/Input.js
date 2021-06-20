
import React from "react";
import { StyleSheet, TextInput } from "react-native";

export const Input = ({ style, ...props }) => {
    const [value, onChangeText] = React.useState(props?.value);
    return (
        <TextInput
            style={styles.input}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        color: 'black',
        fontFamily: 'Roboto',
        height: 60,
        width: '100%',
        padding: 20,
        fontSize: 20,
        color:'black',
        backgroundColor:'#EEE',
        borderRadius: 20,
        margin: 15,
    }
});