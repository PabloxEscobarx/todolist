import './index.css'
import ToDoItem from "../ToDoItem";
import {useDispatch ,useSelector} from "react-redux";
import {useEffect, useState} from "react";
export default function ToDoList (){
    const [state, setState] = useState([]);
    const dispatch = useDispatch();
    const reduxState = useSelector(state => state.todos);
    useEffect(() => {
        if(localStorage.key('todos')){
            setState(JSON.parse(localStorage.getItem('todos')))
        }else{
            setState(reduxState);
        }
    },[reduxState]);
    const changeTodosStatus = e => {
        const targetId = e.target.closest('.toDoItem').id;
        dispatch(
            {type:'change item status',
            change: e.target.value,
            id: targetId,
        })
    }
    const deleteTodos = e => {
        if (window.confirm('are you sure ?')){
            const currentId = e.target.closest('.toDoItem').id;
            dispatch({type: 'delete item', removeEl: currentId});
        }else{
            alert('ok, we don`t do this')
        }
    }

    return(
        <div className={'toDoList'}>
            {state.map(item => {
                return <ToDoItem
                    status={item.status}
                    delete={deleteTodos}
                    changeStatus={changeTodosStatus}
                    id={item.id}
                    title={item.title}
                    desc={item.description}
                    actionName={'change todos'}
                />})
            }
         </div>
    )
}