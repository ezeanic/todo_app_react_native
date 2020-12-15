
// import React from 'react';
// import { render } from 'react-dom';
// import { StyleSheet, Text, TextInput, Button, View, TouchableOpacity } from 'react-native';


// export default class Todoitem extends React.Component {

//     constructor(){
//         super(props);
//       }

//       render(){
//         const todoitem = this.props.todoitem
//         return (
//           <View style={styles.container}>
//             <Header title="Todoapp"/>
//             <InputBar textChange={todoInput => this.setState({ todoInput})} addNewTodo={()=>{this.addNewTodo()}}/>
//             <FlatList data={this.state.todos} keyExtractor={(item, index)=>index.toString()} renderItem={(item, index)=>{return(<Todoitem/>)}}/>
//           </View>
//         );
//       }
//     }