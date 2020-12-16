import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import Header from './components/Header';
import InputBar from './components/InputBar';
import Todoitem from './components/Todoitem';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {
   constructor(){
    super();
    this.state={
      deleteval: 0,
      todoInput: '',
      todos: [{id: 0, title: 'Take out trash', done: false}]
    }
  }

  deleteTodo(val){
    let todolist = this.state.todos;
    console.log(this.state.deleteval);
    todolist = todolist.filter(todo=>todo.id != val);
    
    this.setState({todos: todolist}); 
  }

  addNewTodo(){
    let todos = this.state.todos;
    if(this.state.todoInput != ""){
      todos.unshift(
        {id: todos.length, title: this.state.todoInput, done: false}
      );
  }
    
    this.state.todos = todos;
    console.log(this.state.todos);
    //make input nothing after adding new
    this.setState({
      todoInput: '',
    })
  }
  
  render(){
    // let items = []
    // this.state.todos.forEach(element => {
    //   items.push(element.title)
    //   // items.push(<Text style={styles.itemstext}>{element.title}</Text>)
      
    // }); 

    return (
      <View style={styles.container}>
        <Header title="Todoapp"/>
        <InputBar textChange={todoInput => this.setState({ todoInput})} addNewTodo={()=>{this.addNewTodo()}}/>
        <Todoitem todoitemtitle={this.state.todos} deleteTodo={(val)=>{this.deleteTodo(val)}}/>
        <Text style={styles.spacefooter}></Text>
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
  items: {
    top: "10%",
    height: 700,
  }
});
