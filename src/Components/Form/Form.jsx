import './index.css'
import {useRef} from "react";
import {useDispatch} from "react-redux";
export default function Form (props){
    const inputTitle = useRef();
    const inputDesc = useRef();
    const dispatch = useDispatch();
    const createTodos = e => {
        e.preventDefault();
        const formData = {
            id : Math.random().toString().substr(2,9),
            status: 'open'
        };
        formData.title = inputTitle.current.value;
        formData.description = inputDesc.current.value;
        inputTitle.current.value = '';
        inputDesc.current.value = '';
        dispatch({type :'create item', todoItem : formData});
    }
    const changeTodosFromList = e =>{
        e.preventDefault();
        const targetId = e.target.closest('.toDoItem').id;
        const formData = {
            id: targetId,
        }
        formData.updateTitle = inputTitle.current.value;
        formData.updateDesc = inputDesc.current.value;
        dispatch({type :'change item description', updateTodos : formData});
        inputTitle.current.value = '';
        inputDesc.current.value = '';
    }

    return(
        <form onSubmit={props.createTodos ? createTodos : changeTodosFromList} className={props.class}>
            <input ref={inputTitle} name={'title'} type="text" placeholder='Title' required={props.actual}/>
            <input ref={inputDesc} name={'description'} type="text" placeholder='Description' required={props.actual}/>
            <button>{props.actionName}</button>
        </form>
    )
}