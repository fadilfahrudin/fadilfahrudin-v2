import { heroImg } from "../../assets/img";
import resume from "../../assets/doc/resume-fadilfahrudin.pdf"

const JumbotronComponent = () => {
    const openPdf = () => {
        window.open(resume);
    }
    return (
        <div className="jumbotron">
            <div className="jumbotron-text">
                <h5 className="jumbotron-about">Hi. I'm Fadil Fahrudin, I can translate something digital problem into an application simply but not reduce the desired needs, elegantly, and responsive. and now I am available as a freelancer to help you.</h5>
                <button className="btn btn-resume" onClick={() => openPdf()}>Resume</button>
            </div>
            <img src={heroImg} alt="Fadil" className="jumbotron-hero" width='100%' height='100%' />
        </div>
    )
}
export default JumbotronComponent;