
const Todo = () => {
    const [todos,setTodos] = React.useState([]);
    const handleTaskCreate = (title) => {
        const payload = {
            id : todos.length + 1,
            title : title,
            status : false
        };
        setTodos([...todos,payload]);
    }
    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id;
        }))
    }
    const handleToggle = (id) => {
        setTodos(todos.map((todo)=>
            todo.id === id ? {...todo, status : !todo.status} : todo
        ))

    }
    return(
        <div>
            <h4>Todo App</h4> 
        <TodoInput onTaskCreate={handleTaskCreate}/>
        {todos.map((todo) => 
            <TodoItem key={todo.id} id={todo.id} status={todo.status} title={todo.title} handleDelete = {handleDelete} handleToggle = {handleToggle}/>
        )}
        </div>
    )
}
const TodoInput = ({onTaskCreate}) => {
    const [text,setText] = React.useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }
    return(
        <div>
            <input type="text" value={text} placeholder="Add something" onChange={handleChange} />
            <button type="submit" onClick={()=>onTaskCreate(text)}>Add</button>
        </div>    
    )
}
const TodoItem = ({id,status,title,handleDelete,handleToggle}) => {
    return(
        <div>
            <span>{`${title} -  ${status}`}</span>
            <button type="submit" onClick={()=>handleDelete(id)}>X</button>
            <button type="submit" onClick={()=>handleToggle(id)}>Toggle</button>
        </div>
    )
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Todo />);
