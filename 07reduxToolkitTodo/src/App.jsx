import { useState } from "react";
import './App.css'
import AddTodo from './component/AddTodo';
import Todos from './component/Todos';

function App() {

  return (
    <>
    <h1>Hello coder With Rdux-Toolkit</h1>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
