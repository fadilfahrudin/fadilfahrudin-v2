import { heroImg } from "../../assets/img";

const JumbotronComponent = () => {
    return (
        <div className="jumbotron">
            <div className="jumbotron-text">
                <h5 className="jumbotron-about">Hi. I'm Fadil Fahrudin, I can translate something digital problem into an application, like a web application or a mobile application, and absolutely comfortable for the eye so easy to use.</h5>
                <button className="btn btn-resume">Resume</button>
            </div>
            <img src={heroImg} alt="Fadil" className="jumbotron-hero" width='100%' height='100%' />
        </div>
    )
}
export default JumbotronComponent;