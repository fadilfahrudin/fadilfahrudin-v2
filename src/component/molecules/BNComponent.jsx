import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import onLoadData from "../../utils/skeleton";

const BNComponents = () => {
    const navigate = useNavigate()
    const pathName = window.location.pathname;

    const menus = [
        {
            'id': 1,
            'title': 'Home',
            'path': '/',
            'class': 'bn-home',
            'icon': 'ic-home',
        },
        {
            'id': 2,
            'title': 'About',
            'path': '/about',
            'class': 'bn-about',
            'icon': 'ic-about',
        },
        {
            'id': 3,
            'title': 'Project',
            'path': '/project',
            'class': 'bn-project',
            'icon': 'ic-project',
        }
    ]

    // eslint-disable-next-line no-unused-vars
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        document.body.style.setProperty('--scroll', position / (document.body.offsetHeight - window.innerHeight));
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    const smoke = document.getElementsByClassName('smoke-wrapp')[0];
    const scrolltoTop = () => {
        smoke.style.display = 'flex';
        return window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    if (smoke && scrollPosition === 0) {
        smoke.style.display = 'none';
    }

    const onNavigate = (path) => {
        navigate(path, { replace: true });
    }

    return (
        <div className="wrapp-bn-navigation">
            <div className="bn-navigation">
                <ul>
                    {menus.map(menu => (
                        <li role="button" className="link" key={menu.id} onClick={() => onNavigate(menu.path)}>
                            <button type="button" className={pathName === menu.path ? 'bn-active' + ' ' + menu.class : menu.class}>
                                <i className={menu.icon}></i>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="to-the-top" onClick={() => scrolltoTop()}>
                <i className="rocket-launcher"></i>
                <div className="smoke-wrapp">
                    <div className="smoke"></div>
                </div>
            </div>
        </div>
    )
}

export default BNComponents;