import {
    SET_ADD,
    SET_CANCEL_UPDATE,
    SET_DELETE,
    SET_INPUT_UPDATE,
    SET_TODO_INPUT,
    SET_TODO_UPDATE,
    SET_EDIT,
} from "./contants";

const initState = {
    todoInput: "",
    todos: [],
    indexUpdate: null,
    setInputUpdate: "",
};

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            };
        case SET_ADD:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        case SET_DELETE:
            const newTodo = [...state.todos];
            newTodo.splice(action.payload, 1);
            return {
                ...state,
                todos: newTodo,
            };
        case SET_EDIT:
            return {
                ...state,
                setInputUpdate: state.todos[state.indexUpdate],
            };

        case SET_INPUT_UPDATE:
            return {
                ...state,
                setInputUpdate: action.payload,
            };

        case SET_TODO_UPDATE:
            state.todos[state.indexUpdate] = state.setInputUpdate;
            state.indexUpdate = null;

            return {
                ...state,
            };
        case SET_CANCEL_UPDATE:
            state.indexUpdate = null;
            return {
                ...state,
                setInputUpdate: "",
            };
        default:
            throw new Error("Invalid Action");
    }
}

export { initState };
export default reducer;
