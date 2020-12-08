import { ADD_TASK, TOGGLE_COMPLETED, REMOVE_COMPLETED } from './../actions';


export const initialState = [
    {
        task: "",
        id: 0,
        completed: false
    }
];

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_TASK:
            // state.length === 0 ? state = initialState : 
            console.log(state);
            // if (state.length === 0 || (state.length === 1 && state[0] === null)){
            //     const out = [...state, { task:action.payload, id:0, completed: false }];
            //     var removeEmptyElements = out.filter(function (e) {
            //         return e != null;
            //     });
            //     console.log(state);
            //     return(removeEmptyElements);
            // } else {
                return([...state, { task:action.payload, id:(state[state.length-1].id + 1), completed: false }]);
            // }
            // return([...state, { task:action.payload, id:(state[-1].id - 1), completed: false }]);
        case TOGGLE_COMPLETED:
            const idOfCompleted = action.payload;
            const copyOfStateToggle = [...state];
            const toToggle = copyOfStateToggle.find(x => x.id === idOfCompleted);
            const toggled = {...toToggle, completed:!toToggle.completed};
            for (let i = 0, len = copyOfStateToggle.length; i < len; i++) {
                if (copyOfStateToggle[i] === toToggle) {
                    copyOfStateToggle[i] = toggled;
                }
            }
            console.log(copyOfStateToggle);
            return(copyOfStateToggle);
            // return({...state, completed:!state.completed });
        case REMOVE_COMPLETED:
            const copyOfStateRemove = [...state];
            for (let i = 0; i < copyOfStateRemove.length; i++) {
                if (copyOfStateRemove[i].completed === true){
                    // delete copyOfStateRemove[i];
                    copyOfStateRemove.splice(i, 1);

                    // if (copyOfStateRemove.length === 0){
                    //     console.log(initialState);
                    //     return(initialState);
                    // }
                }
            }
            // console.log(copyOfStateRemove);
            return(copyOfStateRemove);
            // return({});
        // case SET_NEW_TASK:
        //     return({ ...state, task:action.payload });
        default:
            return(state);
    }
}

export default reducer;