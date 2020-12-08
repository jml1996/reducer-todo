// const state = [
//     {
//         task: "test0",
//         id: 0,
//         completed: false
//     },
//     {
//         task: "test1",
//         id: 1,
//         completed: false
//     },
//     {
//         task: "test2",
//         id: 2,
//         completed: false
//     }
// ]

// const idOfCompleted = 1;
// const copyOfState = [...state];
// console.log(copyOfState);
// // var lookup = {};
// // for (var i = 0, len = copyOfState.length; i < len; i++){
// //     lookup[copyOfState[i].id] = copyOfState[i];
// // }
// // console.log(copyOfState);
// // console.log(lookup);

// // const toggled = lookup.idOfCompleted;


// const toToggle = copyOfState.find(x => x.id === idOfCompleted);
// // console.log(toToggle);
// // toggled = 

// const toggled = {...toToggle, completed:!toToggle.completed};
// // console.log(toggled);

// // console.log(copyOfState);

// for (let i = 0, len = copyOfState.length; i < len; i++) {
//     if (copyOfState[i] === toToggle) {
//         copyOfState[i] = toggled;
//     }
// }

// console.log(copyOfState);

const initialState = [
    {
        task: "test",
        id: 0,
        completed: false
    }
];

console.log(initialState[initialState.length-1].id);