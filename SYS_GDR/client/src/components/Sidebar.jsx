import "../styles/Sidebar.css";

function Sidebar({ user, onLogout }) {

    return (

        <aside className="sidebar">

            <div className="sidebar-avatar">

                🎲

            </div>

            <h2>
                {user?.username}
            </h2>

            <p>
                {user?.email}
            </p>

            <button
                className="logout-btn"
                onClick={onLogout}
            >
                Logout
            </button>

        </aside>

    );
}

export default Sidebar;