import React, { useState, useReducer } from 'react';
import reducer, { initialState } from "./reducers/index";
import { addTask, toggleCompleted, removeCompleted } from './actions/index';

// console.log(initialState);

// let currentState = reducer(initialState, setTitle("Allison"));
// console.log(currentState);

// currentState = reducer(currentState, setEditing(true));
// console.log(currentState);

// currentState = reducer(currentState, setNewTitleText("This right here"));
// console.log(currentState);

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputState, setInputState] = useState("");
  
  const handleCompleted = () => {
      dispatch(removeCompleted());
  }

//   const handleChanges = (e) => {
//       dispatch(setNewTask(e.target.value));
//   }

  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);
  // const [newTitleText, setNewTitleText] = useState('');

  const handleChanges = e => {
    setInputState(e.target.value);
  };

  return (
    <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(inputState);
            dispatch(addTask(inputState));
            setInputState("");
        }}>
            <input
                value={inputState}
                onChange={handleChanges}
                type="text"
                name="item"
            />
            <button
                // onClick={() => {
                //     dispatch(addTask(inputState));
                //     setInputState("");
                // }}
            >
                Add
            </button>
        </form>
        {state.map(item => (
            //   console.log(item)
            // <Todo item={item} handleToggle={props.handleToggle} />
            // 
            <div onClick={() => dispatch(toggleCompleted(item.id))} className={`todo${item.completed ? ' completed' : ''}`}>
                <p>{item.task}</p>
            </div>
        ))}
        <button onClick={handleCompleted}>
            Clear completed tasks
        </button>

      {/* {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={() => dispatch(setEditing(!state.editing))} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch(setTitle(state.newTitleText));
              dispatch(setEditing(false));
            }}
          >
            Update title
          </button>
        </div>
      )} */}
    </div>
  );
};

export default TodoList;