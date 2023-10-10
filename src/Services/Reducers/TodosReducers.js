import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../Constants/TodosConstants";

// states
const initialTodoState = {
    todos: [],
    isLoading: false,
    error: null
};


// reducer
export const todosReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload,
            };
        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}