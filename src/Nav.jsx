import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                    <Link className="nav-link text-light" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/GroupedTeamMembers">Teams</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav