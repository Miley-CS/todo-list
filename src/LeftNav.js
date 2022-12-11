import './LeftNav.css';
import Category from './Category.js';

function LeftNav() {
    return (
        <nav className="left-nav">
            <Category 
                heading="projects"
                navItem1="Todo List"
                navItem2="Drawing"
            />
            <Category 
                heading="personal"
                navItem1="Books"
                navItem2="Goals"
                />
            <Category
                heading="shared"
                navItem1="Story Plot"
                navItem2="Plans"
                />
            <button className="left-nav-add">+</button>
        </nav>
    )
}

export default LeftNav;
