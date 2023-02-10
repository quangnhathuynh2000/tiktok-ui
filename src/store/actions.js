import { SET_ADD, SET_CANCEL_UPDATE, SET_DELETE, SET_INPUT_UPDATE, SET_TODO_INPUT, SET_TODO_UPDATE, SET_EDIT } from "./contants";

export const setTodoInput = (payload) => ({ payload, type: SET_TODO_INPUT });
export const setAdd = (payload) => ({ payload, type: SET_ADD });
export const setDelete = (payload) => ({ payload, type: SET_DELETE });
export const setEdit = (payload) => ({ payload, type: SET_EDIT });
export const setInputUpdate = (payload) => ({ payload, type: SET_INPUT_UPDATE });
export const setTodoUpdate = (payload) => ({ payload, type: SET_TODO_UPDATE });
export const setCancelUpdate = (payload) => ({ payload, type: SET_CANCEL_UPDATE });
