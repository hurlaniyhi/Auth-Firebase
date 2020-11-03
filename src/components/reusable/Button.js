import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import DeprecatedViewPropTypes from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes';



const Button = ({onPress, children}) => {
    
    return (
        <TouchableOpacity onPress={onPress} style={styles.ButtonStyle}>
           <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   ButtonStyle: {
       alignSelf: 'stretch',
       backgroundColor: '#fff',
       borderRadius: 5,
       borderWidth: 1,
       borderColor: "#007aff",
       marginHorizontal: 5,
       flex: 1,
       
   },
   textStyle: {
       alignSelf: "center",
       color: "#007aff",
       fontSize: 16,
       fontWeight: "600",
       paddingVertical: 10
   }
  });

export {Button}