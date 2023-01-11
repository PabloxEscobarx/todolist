import {toast} from "react-toastify";
const defReducerState = [];
const localStorageDataSave = (data) => {
    localStorage.setItem('todos', JSON.stringify(data));
}
export const reducerTodos = (state = defReducerState, action) => {
    switch (action.type){
        case 'create item':
            toast(`todos created with title: ${action.todoItem.title}`)
            state.push(action.todoItem);
            localStorageDataSave([...state]);
            return [...state]
        case 'change item description' :
                state.forEach(item => {
                    if(item.id === action.updateTodos.id) {
                        if(action.updateTodos.updateTitle !== ''){
                            item.title = action.updateTodos.updateTitle;
                            toast('todos title update');
                        }
                        if(action.updateTodos.updateDesc !== ''){
                            item.description = action.updateTodos.updateDesc;
                            toast('todos description update');
                        }
                    }
                })
            localStorageDataSave([...state])
            return [...state]
        case 'change item status':
            state.forEach(item => {
                if(item.id === action.id){
                    item.status = action.change;
                    toast(`todos ${item.title} status changed on ${action.change}`);
                }
            });
            localStorageDataSave([...state])
            return [...state]
        case 'delete item':
            toast('todos remove')
            const update = state.filter(item => item.id !== action.removeEl);
            localStorageDataSave([...update])
            return [...update]
        default:
                return [...state]
    }
}