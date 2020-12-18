import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, ScrollView} from 'react-native';

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
    );

const Todoitem = (props) => {
    
    const renderItem = ({ item }) => (
        <View style={styles.textanddeleteButton}>
            <Item title={item.title} />
            <TouchableOpacity style={styles.deleteButton} onPress={()=>{props.deleteTodo(item.id)}}>
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
    
    return (
            <View style={styles.container}>
                <FlatList data={props.todoitemtitle} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
                <View style={styles.spacefooter}></View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: 120,
      width: "100%"
    },
    item: {
      backgroundColor: '#F3F3F3',
      padding: 5,
      marginVertical: 8,
      marginHorizontal: 6,
      flex: 1,
    },
    title: {
        fontSize: 18,
    },
    spacefooter: {
        marginVertical: 60,
    },
    textanddeleteButton: {
        flexDirection: "row",
        shadowOpacity: 0.1,
        shadowColor: '#171717',
        justifyContent: 'center',
    },
    deleteButton: {
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 8,
      marginHorizontal: 6,
      paddingHorizontal: 12

  },
  deleteButtonText: {
      color: "#fff",
      fontWeight: "700",
      fontSize: 12,
      textTransform: 'uppercase',
      
  }
  });

  export default Todoitem;
