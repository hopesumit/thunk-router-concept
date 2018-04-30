export const getReducer = (state=[], action) => {
    switch(action.type){
        case "GET_STARTED": 
            return state;
        case "GET_SUCCESS":
            return action.data;
        case "GET_ERROR":
            return state;
        default: return state;
    }
}

export const addReducer = (state=[], action) => {
    switch(action.type){
        case "ADD_STARTED": 
            return state;
        case "ADD_SUCCESS":
            return Object.assign({} , state, {msg: "Success" });
        case "ADD_ERROR":
            return Object.assign({} , state, {msg: "Error" });
        default: return state;
    }
}