import React, { useState } from 'react';
import { render } from 'react-dom';
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
    const [text, setText] = useState(''); // for clearing Textinput
    return (
        <View style={styles.inputcontainer} keyboardShouldPersistTaps='always'>
            <ScrollView style={styles.scrollviews}>
                <TextInput  placeholder="Enter event" clearButtonMode="always" style={styles.input} onChangeText={(todoInput) => {props.textChange(todoInput); setText(todoInput)}} value={text}/>
            </ScrollView>
            <TouchableOpacity style={styles.addButton} onPress={()=>{props.addNewTodo(); setText('')}}>
                <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
            
        </View>
    );
}


  const styles = StyleSheet.create({
    inputcontainer: {
        flexDirection: "row",
        shadowOpacity: 0.1,
        shadowColor: '#171717',
        justifyContent: 'center',
        position: "relative",
        top: 110,
        left: 10,
        right: 10,
        // alignItems:'center'
      },
    input: {
        fontSize: 18,
        paddingVertical: 8,
        backgroundColor: '#D3D3D3',
        width: "85%"
    },
    addButton: {
        width: "20%",
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 2,
        paddingVertical: 10,
        left: "-35%",
        paddingHorizontal: 3,
        paddingVertical: 8,
    },
    addButtonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 12,
        textTransform: 'uppercase',
    },
    cleartext: {

    },
    cleartexttext: {
        fontSize: 30
    }
  });

  export default InputBar;
