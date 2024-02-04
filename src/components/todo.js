import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoList() {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState('');

  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="col-md-6 offset-md-3 ">
      <div className="d-flex justify-content-center">
        <h1 className="mt-4">TTodo List</h1>
      </div>
      <div className="input-group mb-3">
        <input
          className="form-control"
          placeholder="Enter a new todo"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Add TTodo
        </button>
      </div>

      <ul className="list-group">
        {todos.map((todo, index) => (
          <li className="list-group-item" key={index}>
            {todo}
            <button className="btn btn-danger float-end" onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default TodoList;