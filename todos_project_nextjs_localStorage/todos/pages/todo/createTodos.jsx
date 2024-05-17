import { useState } from "react";
import localStorageHelper from "./localStorageHelper";

export default function CreateTodos() {
  // Create a unique ID for the todo
  const idSet = new Set();
  function generateUniqueId() {
    const newId = Math.floor(Math.random() * 1000000);
    if (idSet.has(newId)) {
      return generateUniqueId();
    } else {
      idSet.add(newId);
      return newId;
    }
  }
  const uniqueId = generateUniqueId();

  const [todo, setTodo] = useState({ id: uniqueId, title: "", desc: "" });

  const addTodo = () => {
    let todos = localStorageHelper.getItem("todos");
    if (todos) {
      todos.push(todo);
      localStorageHelper.setItem("todos", todos);
      alert("Todo has been added successfully");
      setTodo({ id: generateUniqueId(), title: "", desc: "" });
    } else {
      localStorageHelper.setItem("todos", [todo]);
    }
  };

  const onChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className=" text-3xl">
      <section className="text-gray-600 body-font">
        <div
          className="container px-5 py-20
					mx-auto flex flex-wrap items-center"
        >
          <div
            className="rounded-lg p-8 flex flex-col 
						md:ml-auto w-full mt-10 md:mt-0 bg-slate-100 "
          >
            <h2
              className="text-gray-900 text-lg 
							font-medium title-font mb-5"
            >
              Add a Todo
            </h2>
            <div className="relative mb-4">
              <label
                for="title"
                className="leading-7 text-sm 
									text-gray-600"
              >
                Todo Title
              </label>
              <input
                onChange={onChange}
                value={todo.title}
                type="text"
                id="title"
                name="title"
                className="w-full bg-white rounded border border-gray-300
								 text-base outline-none
								text-gray-700 py-1 px-3"
                autoComplete="false"
              />
            </div>
            <div className="relative mb-4">
              <label for="desc" className="leading-7 text-sm text-gray-600">
                Todo Description
              </label>
              <input
                onChange={onChange}
                value={todo.desc}
                type="text"
                id="desc"
                name="desc"
                className="w-full bg-white rounded border 
								 text-base 
							 text-gray-700 py-1 px-3"
                autoComplete="false"
              />
            </div>
            <button
              onClick={addTodo}
              className="text-white
						bg-green-800 border-0 py-2 px-8
						 w-fit
						rounded text-lg"
            >
              Add Todo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
