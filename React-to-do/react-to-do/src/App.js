import React, {useState} from 'react';

const App = () => {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    const [todo, setTodo] = useState();

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <label for="todo">To Do:</label>
        <input type="text" name="todo" value={todo} />
        <button onClick={e => setTodo(e.target.value)}/>
      </div>
    );
}

export default App;