import React, { useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      text: "First task",
      isFinished: true,
    },
    {
      text: "Second task",
      isFinished: false,
    },
  ]); //main state, kuri keiciam is skirtingu komponentu

  function handleAddTask(task) {
    const newTasks = JSON.parse(JSON.stringify(tasks));
    newTasks.push({
      text: task,
      isFinished: false,
    });
    setTasks(newTasks);
  }

  function handleCheckbox(index) {
    // tasks[index].isFinished = !tasks[index].isFinished; //Taip siaip negalim rasyt, nes tasks yra immutable, negalim prilygint kitos reiksmes ir todel visad turim setTasks naudot
    const newTasks = JSON.parse(JSON.stringify(tasks)); //Objektu pasiklonavimo budas. Originalo nelieciam, o sitoj vietoj sukuriam nauja objekta. const newT = tasks, tai nepadaro naujo kintamojo. Jeigu mes pakeistume newT, pasikeistu ir originalas - tasks
    newTasks[index].isFinished = !newTasks[index].isFinished;

    setTasks(newTasks);
  } //noresiu pereit per visa state array. Noriu zinot elemento, kuri noriu pakeist, index. Index gaunu is TaskList. Sita f-ija reikia i kiekvieno is Task pasiduoti.

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} handleCheckbox={handleCheckbox} />
      <AddTaskForm handleAdd={handleAddTask} />
    </div>
  );
}

export default App;
