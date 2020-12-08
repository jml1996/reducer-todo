export const ADD_TASK = "ADD_TASK";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const REMOVE_COMPLETED = "REMOVE_COMPLETED";

// title is title payload
export const addTask = (newTaskTitle) => {
    return( {type:ADD_TASK, payload:newTaskTitle });
}

export const toggleCompleted = (idOfCompleted) => {
    return( {type:TOGGLE_COMPLETED, payload:idOfCompleted });
}

export const removeCompleted = () => {
    return( {type:REMOVE_COMPLETED});
}