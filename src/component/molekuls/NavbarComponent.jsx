/* eslint-disable no-unused-vars */
import { useState } from "react";
import { logoFadil } from "../../assets/img";

const NavbarComponent = () => {

    const curentUrl = window.location.pathname;
    const [active, setActive] = useState(false);

    const navigate = () => {
        console.log(curentUrl);
    }

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
            <img src={logoFadil} alt="Fadil Fahrduin" className="home-brand" width={'5%'} />
            <ul>
                {menus.map((menu) => (
                    <li key={menu.id} className={curentUrl === menu.link ? "active" : ""} onClick={() => navigate()}>{menu.title}</li>
                ))}
            </ul>
        </nav>
    )
}

export default NavbarComponent;