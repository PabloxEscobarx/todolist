import './index.css'
import {useState} from "react";
import Form from "../Form";
export default function ToDoItem (props){
    const [formState, setFormState] = useState(true);
    const visibilityFormInTodos = () =>{
        setFormState(!formState);
    }
    const classForForm = formState ? 'changeTodosForm hidden' : 'changeTodosForm'
    return(
        <div id={props.id} className={'toDoItem '+ props.status}>
            <div className="title">
               <h2>Title: {props.title}</h2>
            </div>
            <div className="description">
               <p>Description: {props.desc}</p>
            </div>
            <div className="status">
                <label>status :
                    <select onChange={props.changeStatus}>
                        <option value="open">open</option>
                        <option value="inProgress">inProgress</option>
                        <option value="closed">closed</option>
                    </select>
                </label>
            </div>
            <Form
                inputTitle={props.inputTitle}
                inputDesc={props.inputDesc}
                actionName={'change todos'}
                class={classForForm}
                createTodos={false}
                actual={false}
            />
            <button onClick={visibilityFormInTodos}>{formState ? 'click for change' : 'hidden form'}</button>
            <button onClick={props.delete}>delete todos</button>
        </div>
    )
}

