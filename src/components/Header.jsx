import { NavLink } from "react-router"
import { useFilters } from "../hooks/useFilters"

const Header = () => {
    const { resetFilters } = useFilters();

    const handleNavClick = () => {
        resetFilters();
    }

    return (
        <header className="header">
            <h1 className='logo'>MyShop</h1>

            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink
                            onClick={handleNavClick}
                            to={"/bags"}
                            className={`nav__link ${({ isActive }) =>
                                isActive ? "active" : ""}`}>Bags</NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink
                            onClick={handleNavClick}
                            to={"/shoes"}
                            className={`nav__link ${({ isActive }) =>
                                isActive ? "active" : ""}`}>Shoes</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header