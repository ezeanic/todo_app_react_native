import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
    
    return (
        <View style={styles.inputcontainer}>
            <TextInput placeholder="Enter event" style={styles.input} onChangeText={(todoInput) => props.textChange(todoInput)} value={props.todoInput}/>
            <TouchableOpacity style={styles.addButton} onPress={()=>{props.addNewTodo()}}>
                <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
        </View>
    );
}


  const styles = StyleSheet.create({
    inputcontainer: {
        flexDirection: "row",
        // // textShadowOffset: 'space-between',
        shadowOpacity: 0.1,
        shadowColor: '#171717',
        justifyContent: 'center',
        position: "absolute",

        // position: 'absolute',
        top: "15%",
        left: 20,
        right: 15,
        // alignItems:'center',
      },
    input: {
        fontSize :18,
        flex: 1,
        backgroundColor: '#F3F3F3',
        height: 35
    },
    addButton: {
        width: 100,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center"
    },
    addButtonText: {
        color: "white",
        // fontWeight: 700,
        textTransform: 'uppercase',
        
    }
  });

  export default InputBar;
