/* eslint-disable no-unused-vars */
import { NavLink, useNavigate } from "react-router-dom";
import { logoFadil } from "../../assets/img";

const NavbarComponent = () => {

    const navigate = useNavigate()

    const menus = [
        {
            "id": 0,
            'title': 'Home',
            'link': '/',
            'icon': 'icon-home',
        },
        {
            'id': 1,
            'title': 'About',
            'link': '/about',
            'icon': 'icon-about',
        },
        {
            'id': 2,
            'title': 'Projects',
            'link': '/project',
            'icon': 'icon-projects',
        },
    ]

    return (
        <nav className="navigation">
            <img role="button" src={logoFadil} alt="Fadil Fahrduin" className="home-brand" width={'5%'} onClick={() => navigate('/')} />
            <ul>
                {menus.map((menu) => (
                    <NavLink to={menu.link} key={menu.id} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ""}>{menu.title}</NavLink>
                ))}
            </ul>
        </nav>
    )
}

export default NavbarComponent;