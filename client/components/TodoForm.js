import React from 'react'
import database from '../../firebase.config'
import { ref, push } from 'firebase/database'

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault() // stop page from refreshing
    const todoRef = ref(database, 'Todos/')
    push(todoRef, {name: this.state.name, isComplete: false})
    this.setState({name: ''})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Add Todo</h1>
        <label htmlFor="name">Name</label>
        <input type="string" name="name" value={this.state.name} onChange={this.handleChange}/>
      </form>
    )
  }
}

export default TodoForm
