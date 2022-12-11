import './LeftNav.css';
import Category from './Category.js';

function LeftNav() {
    return (
        <nav className="left-nav">
            <Category />
            <Category />
            <Category />
            <button className="left-nav-add">+</button>
        </nav>
    )
}

export default LeftNav;
