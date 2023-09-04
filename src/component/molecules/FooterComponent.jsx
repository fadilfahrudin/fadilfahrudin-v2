import { logoBehance, logoDribbble, logoGithub, logoIg, logoLinkedIn, logoYoutube } from "../../assets/img";

const FooterComponent = () => {
    return (
        <footer>
            <div className="line-break"></div>
            <h5>Hay There 👋</h5>
            <p>Feel free to contact me if you want to collaborate or just be friendly.</p>
            <a href="/" className="email-link">fadilfahrudin32@gmail.com</a>
            <div className="social-media-wrapp">
                <a
                    href='https://dribbble.com/fadilfahrudin'
                    target='_blank'
                    rel='noreferrer'>
                    <img src={logoDribbble} alt='icon' className='logo' width="100%" height="100%" />
                </a>
                <a
                    href='https://www.behance.net/fadilfahrudin'
                    target='_blank'
                    rel='noreferrer'>
                    <img src={logoBehance} alt='icon' className='logo' width="100%" height="100%" />
                </a>
                <a href='https://github.com/fadilfahrudin' target='_blank' rel='noreferrer'>
                    <img src={logoGithub} alt='icon' className='logo' width="100%" height="100%" />
                </a>
                <a
                    href='https://www.instagram.com/fadilfahrudin/'
                    target='_blank'
                    rel='noreferrer'>
                    <img src={logoIg} alt='icon' className='logo' width="100%" height="100%" />
                </a>
                <a
                    href='https://www.linkedin.com/in/fadillahfahrudin'
                    target='_blank'
                    rel='noreferrer'>
                    <img src={logoLinkedIn} alt='icon' className='logo' width="100%" height="100%" />
                </a>
                <a
                    href='https://www.youtube.com/@fadilfahrudin3807'
                    target='_blank'
                    rel='noreferrer'>
                    <img src={logoYoutube} alt='icon' className='logo' width="100%" height="100%" />
                </a>
            </div>
            <p>© 2022 Created By Fadil Fahrudin and Make made with ☕</p>
        </footer>
    )
}

export default FooterComponent;