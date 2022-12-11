function Category(props) {
    return(
        <div className="category-nav">
            <h4>{props.heading}</h4>
            <ul>
                <li>{props.navItem1}</li>
                <li>{props.navItem2}</li>
            </ul>
        </div>
    );
}

export default Category;
