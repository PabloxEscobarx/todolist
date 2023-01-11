import './index.css'
import Form from "./Components/Form";
import ToDoList from "./Components/ToDoList";
import Toast from "./Components/Toast";

function App() {
    const classForForm = 'form createTodos'
    return (
    <div className="App">
        <div className="container">
                 <Toast/>
            <Form
                createTodos={true}
                actionName={'Create item'}
                class={classForForm}
                actual={true}
            />
            <ToDoList/>
        </div>
    </div>
  );
}

export default App;
