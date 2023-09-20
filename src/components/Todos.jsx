import React from 'react'
const checkCircle = new URL('../images/check-circle.svg', import.meta.url);
const circle = new URL('../images/circle.svg', import.meta.url);

export const Todos = () => {
    const [fieldValue, setFieldValue] = React.useState("")
    const [todos, setTodos] = React.useState([])

    const handleFieldChange = (event) => {
        setFieldValue(event.target.value)
    }

    const handleSubmitForm = (event) => {
        const newTodos = todos.concat({name: fieldValue, isComplete: false})
        setTodos(newTodos)
        setFieldValue("")
        event.preventDefault()
    }
   
    return (
        <div>
            <h1>Todos</h1>
            <div id="todos">
                <div className="px-4">
                    <form onSubmit={handleSubmitForm}>
                        <div className="field">
                            <input onChange={handleFieldChange} value={fieldValue} type="text" name="name" placeholder="Add a todo..." autoComplete="false" />
                        </div>
                    </form>
                </div>
                <div className="p-4 pt-1">
                    {todos.map((todo, index) => {
                        return (
                        <div className="todo" key={index}>
                            <div className="name">{todo.name}</div>
                            <div>
                                <img className="toggle" src={todo.isComplete? checkCircle : circle} />
                            </div>
                        </div>)
                    })}
                    <div className="todo">
                        <div className="name">Do the other one first!</div>
                        <div>
                            <img className="toggle" src={circle} />
                        </div>
                    </div>
                    <div className="todo">
                        <div className="name line-through">You need to do this!</div>
                        <div>
                            <img className="toggle" src={checkCircle} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}