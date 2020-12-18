import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import Header from './components/Header';
import InputBar from './components/InputBar';
import Todoitem from './components/Todoitem';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {
   constructor(){
    super();
    this.state={
      deleteval: 0,
      todoInput: '',
      todos: []
    }
  }

  deleteTodo(val){
    let todolist = this.state.todos;
    todolist = todolist.filter(todo=>todo.id != val);
    
    this.setState({todos: todolist}); 
  }

  addNewTodo(){ 
    let todos = this.state.todos;
    let index = todos.length;

    if((this.state.todoInput != "")){
      while((todos.some(todo => todo.id === index))){
        index++;
      }
      todos.unshift(
        {id: index, title: this.state.todoInput, done: false}
      );
    }
      
    this.state.todos = todos;
    //make input nothing after adding new
    this.setState({
      todoInput: '',
    })
  } 
  
  render(){  
    return (
      <View style={styles.container}>
        <Header title="Todoapp"/>
        <InputBar textChange={todoInput => this.setState({ todoInput})} addNewTodo={()=>{this.addNewTodo()}}/>
        <Todoitem todoitemtitle={this.state.todos} deleteTodo={(val)=>{this.deleteTodo(val)}}/>
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
  spacefooter: {
    marginVertical: 10,
    backgroundColor: "red",
  },
});
