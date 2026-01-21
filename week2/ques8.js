const state = {
    user: {id:101,detials:{city:'Gur'}},
    theme:"dark"
}


const newState = {...state};
newState.user.detials.city = "Noida";

console.log(state.user.detials.city);



spread operator only do shallow copy of top level of objects
user still refrencing the same object in both state and newState



we can do it using each level of spread operator
const deepStateCopy = {
    ...state,
    user: {
        ...state.user,
        detials: {
            ...state.user.detials
        }
    }
}