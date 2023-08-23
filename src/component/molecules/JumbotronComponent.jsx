import { heroImg } from "../../assets/img";

const JumbotronComponent = () => {
    return (
        <div className="jumbotron">
            <div className="jumbotron-text">
                <h5 className="jumbotron-about">Hi. Im Fadil Fahrudin, I can translate something digital problem to pour inside application, like a web application or a mobile application comfortable for the eye and easy for using.</h5>
                <button className="btn btn-resume">Resume</button>
            </div>
            <img src={heroImg} alt="Fadil" className="jumbotron-hero" width='100%' height='100%' />
        </div>
    )
}
export default JumbotronComponent;