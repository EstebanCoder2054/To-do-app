import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-light">
                <a href="https://github.com/EstebanCoder2054" className="text-black" target="_blank" rel="noopener noreferrer">
                    {this.props.titulo}
                    <span className="badge badge-pill badge-danger ml-2">
                        {this.props.cantidadTasks}           
                    </span>
                </a>
            </nav>
        );
    }
}

export default Header;