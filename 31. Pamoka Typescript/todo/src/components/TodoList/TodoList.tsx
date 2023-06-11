import React, { useState } from "react";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]); // su generic types sita <> naudojami. Nusakom, kad useState naudos tipa, bet mes tiksliai nezinom, kas ten bus. Panaudojimo metu mes galim apsibrezt, koks ten tipas bus. Kazkoks type turi buti, bet nezinom, koks bus. Kai naudosit useState hooksa, taip nurodykit, kokios reiksmes bus issaugomos sitam useState
  const [inputValue, setInputValue] = useState<string>("");

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  } // f-ija, kuri pasiima inputo value ir imeta i state. Inputo value visada pasiimam per eventa. // React turi savo sukurtu daug type'u. Musu event bus butent tokio tipo

  function addTodo() {
    if (inputValue) {
      // jei kazkas irasyta, tada padarom
      setTodos((prev) => [...prev, inputValue]);
    }
  }

  function handleDelete(index: number) {
    setTodos((prev) => prev.filter((value, i) => index !== i)); // prafiltruojam savo todolista. index = index, kuri mum paduoda, o i = index, kuri sugeneruoja filter. Jeigu tos reiksmes index nelygus tam, kuri padave, viskas gerai, grazinam true. Reiskia ta elementa pasiliksim. Jeigu indexas lygus, ismesim false, reiskias to elemento nepasiliekam
  }

  return (
    <div>
      <label htmlFor="todo">Add Todo</label>
      <input id="todo" type="text" value={inputValue} onChange={inputHandler} />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo, i) => {
        return <Todo key={i} text={todo} onDelete={() => handleDelete(i)} />;
      })}
    </div>
  );
}
