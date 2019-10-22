import React, {Component} from 'react';

class Task extends Component{
    
    // constructor(){
    //     super();
    //     this.removeTodo = this.removeTodo.bind(this);
    // }

    // removeTodo(index){
    //     console.log(index);
    // }

    render(){
        return(
        <div className="col-md-4"> 
            <div className="card mt-4">
                <div className="card-header">
                    <h3>{this.props.title}</h3>
                    <span className="badge badge-pill badge-danger ml-3">
                        {this.props.priority}
                    </span>
                </div>
                <div className="card-body">
                    <p>{this.props.description}</p>
                    <p><mark>{this.props.responsible}</mark></p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={this.props.removeTodo.bind(this, this.props.index)}> 
                        Delete &times;
                    </button>
                </div>
            </div>
        </div> 
        );
    }
}

export default Task;