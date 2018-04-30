import axios from 'axios';
const get_Data_started = () => {
    return ({
        type: "GET_STARTED",
    })
}

const get_Data_success = (data) => {
    return ({
        type: "GET_SUCCESS",
        data: data
    })
}

const get_Data_error = () => {
    return ({
        type: "GET_ERROR",
    })
}

export const getDataThunk = () => {
    return function(dispatch){
        dispatch(get_Data_started());
        axios.get("http://5ad1ea3580716500149f238f.mockapi.io/tasks")
        .then((response) => {
            console.log('response: ', response.data);
            dispatch(get_Data_success(response.data))
        })
        .catch((error) => {
            console.log('error: ', error);
            dispatch(get_Data_error())
        })
    }
}

const add_Data_started = () => {
    return ({
        type: "ADD_STARTED",
    })
}

const add_Data_success = () => {
    return ({
        type: "ADD_SUCCESS"
    })
}

const add_Data_error = () => {
    return ({
        type: "ADD_ERROR",
    })
}

export const addDataThunk = (obj) => {
    return function(dispatch){
        dispatch(add_Data_started());
        axios.post("http://5ad1a3580716500149f238f.mockapi.io/tasks",obj)
        .then((response) => {
            console.log('response: ', response.data);
            dispatch(add_Data_success())
        })
        .catch((error) => {
            console.log('error: ', error);
            dispatch(add_Data_error())
        })
    }
}