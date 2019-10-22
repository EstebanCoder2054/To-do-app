import React, {Component} from 'react';
import Swal from 'sweetalert2';

class TodoForm extends Component{
    
    constructor(){
        super();
        this.state={
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
    
    //para conectar el estado con el handleChange
    this.handleChange = this.handleChange.bind(this);
    //para conectar el estado con el handleSubmit
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleChange(e){
        
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            
            [name]: value
        })
        
    }


    handleSubmit(e){
        e.preventDefault();
        
        Swal.fire(
            'Genial!',
            'Se ha enviado el formulario!',
            'success'
          );

        //pasando el state, lo que haya en el formulario al componente principal 
        this.props.handleAddTodo(this.state);   
    }

    
    
    render(){
        
        return(
        <div className="container row formulario">
            <div className="col-md-5 col-sm-12 col-lg-3 formulario mt-3">    
        <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              onChange={this.handleChange}
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              placeholder="Responsible"
              onChange={this.handleChange}
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              onChange={this.handleChange}
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                onChange={this.handleChange}
            >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
      </div>
      </div>
        );
    }
}

export default TodoForm;