import React, {Component} from 'react';
import Task from './Task';

class ListaTasks extends Component{
    
    // removeTodo(index){
    //     console.log(index);
    // }
    
    render(){
        console.log(this.props);
            
     return(
       <div className="container">  
            <div className="row my-4">
                
                {this.props.todos.map( (todo, i) => {
                    return(
                        <Task
                            key={i}
                            title={todo.title}
                            description={todo.description}
                            priority={todo.priority}
                            responsible={todo.responsible}
                            index={i}
                            todos={this.props.todos}
                            removeTodo={this.props.removeTodo}
                        />
                    );
                } )}
            </div>
        </div> 
         );
        
    }
}

export default ListaTasks;