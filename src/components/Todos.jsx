import React from 'react'
const checkCircle = new URL('../images/check-circle.svg', import.meta.url);
const circle = new URL('../images/circle.svg', import.meta.url);

export const Todos = () => {
    return (
        <div>
            <h1>Todos</h1>
            <div id="todos">
                <div className="px-4">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="field">
                            <input type="text" name="name" placeholder="Add a todo..." autoComplete="false" />
                        </div>
                    </form>
                </div>
                <div className="p-4 pt-1">
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