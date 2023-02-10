import { useRef } from "react";
import { actions, useStore } from "./store";


function App() {
    const [state, dispatch] = useStore();
    const { todos, todoInput, setInputUpdate } = state;
    const inputRef = useRef();
    const handleAdd = () => {
        dispatch(actions.setAdd(todoInput));
        dispatch(actions.setTodoInput(""));

        inputRef.current.focus();
    };

    return (
        <div style={{ padding: 20 }}>
            <input
                ref={inputRef}
                value={todoInput}
                placeholder="Todo Enter..."
                onInput={(e) => {
                    dispatch(actions.setTodoInput(e.target.value));
                }}
            />
            <button onClick={handleAdd}>ADD</button>
            {todos.map((todo, index) => (
                <li key={index}>
                    {state.indexUpdate !== index ? (
                        <>
                            {todo}
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={() => dispatch(actions.setDelete(index))}
                            >
                                &times;
                            </span>
                            <button
                                onClick={() => {
                                    state.indexUpdate = index;
                                    dispatch(actions.setEdit(index));
                                }}
                            >
                                edit
                            </button>
                        </>
                    ) : (
                        <>
                            <input
                                placeholder="Enter Update"
                                value={setInputUpdate}
                                onInput={(e) =>
                                    dispatch(actions.setInputUpdate(e.target.value))
                                }
                            />
                            <button
                                onClick={() => {
                                    dispatch(actions.setTodoUpdate());
                                }}
                            >
                                Update
                            </button>

                            <button
                                onClick={() => {
                                    state.indexUpdate = index;
                                    dispatch(actions.setCancelUpdate(todo));
                                }}
                            >
                                cancel
                            </button>
                        </>
                    )}
                </li>
            ))}
        </div>
    );
}
export default App;
