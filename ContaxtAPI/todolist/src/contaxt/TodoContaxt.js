import {createContext, useContaxt} from "react"
export const TodoContext =createContext({
    todos:[
        {
            id: 1,
            todo:"Todo Msg",
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{ },
    teggleComplete:(id)=>{}
    
});

export  const useTodo=()=>{
    return useContaxt(TodoContext)
}

export const TodoProvider=TodoContext.Provider