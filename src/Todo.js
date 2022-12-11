import './Todo.css';
import Items from './Items.js'

function Todo() {
    return (
        <div className="todo-container">
            <h1>Todos</h1>
            <Items heading="Things to do" />
            <Items heading="Classes" />
            <Items heading="Design" />
        </div>
    );
}

export default Todo;
