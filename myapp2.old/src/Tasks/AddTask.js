import React, { Component } from 'react';

class AddTask extends Component {

  handleSubmit(e){
  	e.preventDefault();
  	//console.log(this.refs.name.value);
  	let task = {
  			name: this.refs.name.value,
  			category: this.refs.category.value 
  	};
  	//console.log(task);
  	this.props.addTask(task);
  }

  render() {
    return (
      <div className="AddTask">
	      <form onSubmit={this.handleSubmit.bind(this)}>
	      		<div>
			       <label>Nombre</label>
			       <input type="text" ref="name" />
	      		</div>
	      		<div>
			       <label>Categoria</label>
			       <input type="text" ref="category" />
	      		</div>
	      		<input type="submit" value="Crear Tarea" />
	      </form>
      </div>
    );
  }
}

export default AddTask;
