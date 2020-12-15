import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import Header from './components/Header';
import InputBar from './components/InputBar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {
   constructor(){
    super();
    this.state={
      todoInput: '',
      todos: [{id: 0, title: 'Take out trash', done: false},
      {id: 1, title: 'Take out trash', done: false}]
    }
  }

  addNewTodo(){
    let todos = this.state.todos;
    todos.push(
      {id: todos.length, title: this.state.todoInput, done: false}
    );
    
    this.state.todos = todos;
    console.log(this.state.todos);
    //make input nothing after adding new
    this.setState({
      todoInput: '',
    })
  }
  
  render(){
    let items = []
    this.state.todos.forEach(element => {
      items.push(<Text>{element.title}</Text>)
    });

    return (
      <View style={styles.container}>
        <Header title="Todoapp"/>
        <InputBar textChange={todoInput => this.setState({ todoInput})} addNewTodo={()=>{this.addNewTodo()}}/>
        {items}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
