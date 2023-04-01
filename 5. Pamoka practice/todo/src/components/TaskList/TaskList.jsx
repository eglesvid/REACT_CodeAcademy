import React from "react";
import Task from "../Task/Task";

export default function TaskList(props) {
  const { tasks, handleCheckbox } = props;

  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            handleCheckbox={handleCheckbox} //tures atnaujint pati virsutini state
            index={index} //koks yra index kiekvieno is Task
            text={task.text}
            isFinished={task.isFinished}
          />
        );
      })}
    </div>
  ); //kad galetume ismapint, reik vieno task komponento
}
