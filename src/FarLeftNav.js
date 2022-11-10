import './FarLeftNav.css';

function FarLeftNav() {
    return (
        <div>
            <nav className="far-left-nav">
                <ul className="far-left-nav-list">
                    <li>⭐️</li>
                    <li>📦</li>
                    <li>🎒</li>
                    <li>🌱</li>
                    <li>🌸</li>
                </ul>
                <div className="far-left-nav-bottom-actions">
                    <button className="profile-button">👩🏻</button>
                    <button className="options-button">•••</button>
                </div>
            </nav>
        </div>
    );
}

export default FarLeftNav;
