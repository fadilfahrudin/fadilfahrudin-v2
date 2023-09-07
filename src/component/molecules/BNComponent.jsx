import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BNComponents = () => {
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


    return (
        <div className="wrapp-bn-navigation">
            <div className="bn-navigation">
                <ul>
                    <li className="link">
                        <NavLink to={"/"} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'bn-home bn-active' : "bn-home"} >
                            <i className="ic-home"></i>
                        </NavLink>
                    </li>
                    <li className="link">
                        <NavLink to={"/about"} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'bn-about bn-active' : "bn-about"} >
                            <i className="ic-home"></i>
                        </NavLink>
                    </li>
                    <li className="link">
                        <NavLink to={"/project"} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'bn-project bn-active' : "bn-project"} >
                            <i className="ic-home"></i>
                        </NavLink>
                    </li>
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