import React, {Component} from 'react';
import Header from './components/Header';
import ListaTasks from './components/ListaTasks';
import TodoForm from './components/TodoForm';
import Swal from 'sweetalert2';

import {todos} from './todos.json';

class App extends Component {
  
  constructor(){
    super();
    this.state={
      titulo: 'Tasks App !!',
      todos: todos
    }
  // dándole scope al handleAddTodo event
  this.handleAddTodo = this.handleAddTodo.bind(this);
  // dándole scope al removeTodo event
  this.removeTodo = this.removeTodo.bind(this);  

}

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index){
    console.log(index);
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.setState({
          todos: this.state.todos.filter( (todo, i) => {
            return i !== index;
          } )
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

    
  }

  render(){
    
  return (
    <div className="App">
      <Header
        titulo={this.state.titulo}
        cantidadTasks={this.state.todos.length}
      />

      {/* llamando el componente del formulario */}
      <TodoForm
        handleAddTodo={this.handleAddTodo}
      />

      {/* llamando el compoenente ListTasks */}
      <ListaTasks
        todos={this.state.todos}
        removeTodo={this.removeTodo}    
      />
    </div>
  );
  }
}

export default App;
