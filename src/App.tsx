import React from 'react';
import './App.css';
import Counter from "./components/counter/counter";
import ToDoList from "./components/ToDoList/ToDoList";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


function App() {
  return (
    <div>
        {/*<Counter/>*/}
          {/*<ToDoList/>*/}
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <Button variant="text">Text</Button>
    </div>
  );
}

export default App;
