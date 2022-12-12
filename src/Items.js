import React from "react";
import "./Items.css";

class Items extends React.Component {
    constructor() {
        super();
        this.state = {
            checkedItems: []
        };
    }

    onClickCheckbox = (boxId) => {
        if (this.state.checkedItems.includes(boxId)) {
            // TODO: fix this function
            const idx = this.state.checkedItems.indexOf(boxId);
            this.setState({ checkedItems: this.state.checkedItems.splice(idx, 1) });
        } else {
            this.setState({ checkedItems: [...this.state.checkedItems, boxId] });
        }
    }

    render() {
        return(
            <div className="item-holder">
                <h3>{this.props.heading}</h3>
                <hr/>
                <div className="items">
                    <div className="checkbox-holder">
                        <input onClick={() => this.onClickCheckbox(1)} type="checkbox" className="check" name="item1"></input>
                        <label className={`text ${this.state.checkedItems.includes(1) ? "crossed" : "not-crossed"}`} for="item1"> test1</label>
                    </div>
                    <div className="checkbox-holder">
                        <input onClick={() => this.onClickCheckbox(2) } type="checkbox" className="check" name="item2"></input>
                        <label className={`text ${this.state.checkedItems.includes(2) ? "crossed" : "not-crossed"}`} for="item2"> test2</label>
                    </div>
                    <div className="checkbox-holder">
                        <input onClick={() => this.onClickCheckbox(3)} type="checkbox" className="check" name="item3"></input>
                        <label className={`text ${this.state.checkedItems.includes(3) ? "crossed" : "not-crossed"}`} for="item3"> test3</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Items;
