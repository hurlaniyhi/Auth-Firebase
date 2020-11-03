import React, { Component } from 'react'

import {Text, StyleSheet, TextInput, View} from 'react-native'

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.textInput} 
                value={value}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                onChangeText={onChangeText}
                placeholder={placeholder} 
                style={styles.textInput}
            />
        </View>    
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
       
    },
    textInput: {
        color: "#000",
        paddingHorizontal: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }

})

export { Input }