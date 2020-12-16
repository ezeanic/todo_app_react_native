import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList} from 'react-native';

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
    );

const Todoitem = (props) => {
    
    const renderItem = ({ item }) => (
        <View style={styles.textanddeleteButton}><Item title={item.id} />
            <TouchableOpacity style={styles.deleteButton} onPress={()=>{props.deleteTodo(item.id)}}>
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
      
      console.log(props);
    
    return (
        <View style={styles.container}>
            <FlatList
        data={props.todoitemtitle}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: "20%",
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
      fontSize: 12,
      textTransform: 'uppercase',
      
  }
  });

  export default Todoitem;
