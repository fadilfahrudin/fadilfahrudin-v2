import { logoFadil } from "../../assets/img";

const NavbarComponent = () => {
    return (
        <div className="navigation">
            <img src={logoFadil} alt="Fadil Fahrduin" className="home-brand" width={'5%'} />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
            </ul>
        </div>
    )
}

export default NavbarComponent;