function Items(props) {
    return(
        <div className="item-holder">
            <h3>{props.heading}</h3>
            <hr/>
            <div className="items">
                <div className="checkbox-holder">
                    <input type="checkbox" className="check" name="item1"></input>
                    <label className="text" for="item1"> test1</label>
                </div>
                <div className="checkbox-holder">
                    <input type="checkbox" className="check" name="item2"></input>
                    <label className="text" for="item2"> test2</label>
                </div>
                <div className="checkbox-holder">
                    <input type="checkbox" className="check" name="item3"></input>
                    <label className="text" for="item3"> test3</label>
                </div>
            </div>
        </div>
    );
}

export default Items;
