import { logoBehance, logoDribbble, logoGithub, logoIg, logoLinkedIn, logoYoutube } from "../../assets/img";

const FooterComponent = () => {
    const coffee = () => {
        const coffeeClass = document.querySelector('.coffee');
        coffeeClass.innerHTML = `
        <iframe src="https://giphy.com/embed/1oKjCzdnatyyMxkdxF" width="200" height="200" frameBorder="0" className="coffee" allowFullScreen></iframe>
        `

        setTimeout(() => {
            coffeeClass.innerHTML = ''
        }, 4500);
    }

    return (
        <footer>
            <div className="line-break"></div>
            <div className="footer-body">
                <div className="contact">
                    <h5>Hi There 👋</h5>
                    <p>Feel free to contact me if you want to collaborate or just be friendly. <a href="/" className="email-link">fadilfahrudin32@gmail.com</a></p>
                </div>
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
            </div>
            <p className="license">© 2022 <b>Fadil Fahrudin</b> - Made with a cup of <span onMouseOver={() => coffee()} >☕</span></p>
            <div className="coffee"></div>
        </footer>
    )
}

export default FooterComponent;