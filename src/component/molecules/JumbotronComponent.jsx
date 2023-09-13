import { heroImg } from "../../assets/img";

const JumbotronComponent = () => {
    return (
        <div className="jumbotron">
            <div className="jumbotron-text">
                <h5 className="jumbotron-about">Hi. I'm Fadil Fahrudin, I can translate something digital problem into an application simply but not reduce the desired needs, elegantly, and responsive. and now I am available as a freelancer to help you.</h5>
                <button className="btn btn-resume">Resume</button>
            </div>
            <img src={heroImg} alt="Fadil" className="jumbotron-hero" width='100%' height='100%' />
        </div>
    )
}
export default JumbotronComponent;