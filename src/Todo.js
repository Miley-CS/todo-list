import './Todo.css';

function Todo() {
    return (
        <div>
            <h1>Todos</h1>
            <h3>Things to do</h3>
            <input type="checkbox" id="item1" name="item1"></input>
            <label for="item1"> test1</label>
            <input type="checkbox" id="item2" name="item2"></input>
            <label for="item2">test2</label>
            <input type="checkbox" id="item3" name="item3"></input>
            <label for="item3">test3</label>
        </div>
    );
}

export default Todo;
