import { useRef } from "react";
import { doc1, doc2, doc3, doc4, heroImg, logoLaju, logoMnc, logoSb } from "../assets/img";
import { CardExperience } from "../component/atomic";
import onLoadData from "../utils/skeleton";
import dbStatic from "../config/dbStatic";


const About = () => {
    const experiences = dbStatic.find(({ dbName }) => dbName === "experiences")

    const ref = useRef(null)
    function swipe(range) {
        ref.current.scrollLeft += range
    }

    return (
        <main className="about-page">
            {/* hero img */}
            <div className="loading hero-img">
                <img src={heroImg} alt="fadil Fahrudin" onLoad={() => onLoadData()} />
            </div>

            {/* about */}
            <div className="description">
                <h3 className="title">Hi There! 👋</h3>
                <article className="body-text">
                    <p>
                        I'am <b> Fadillah Fahrudin, as UI design and Front-End Developer.</b> Youth 25 years old born in Lampung. I graduated from Pamulang University majoring in Informatic of technic (2023).
                    </p>
                    <img src={doc1} alt="fadil-fahrudin" className="img-about" width="100%" height="100%" />
                    <p>
                        I have strong experience in using programming languages such as HTML, CSS, JavaScript, and a little basic PHP and I can also work with some frameworks that I am good at such as Bootstrap, React JS, React Native, and a little understanding of Laravel. I also understand the basic concepts of responsive design and interface design.
                    </p>

                    <p>
                        First time I became interested in programming languages when I was in Junior High School and at that time I watched a movie titled Who Am I after this I was interested and wanted to be a hacker.😁 So I started to find out how to learn programming language when I was a bachelor's degree student at Pamulang University (2017) I chose major in informatics of technic and the first language that I knew was C++ until the fourth semester I found a YouTube channel <a href="https://www.youtube.com/@sandhikagalihWPU">Web Programming UNPAS</a> that provides education regarding basic languages such as HTML CSS PHP and Javascript.
                    </p>
                    <img src={doc3} alt="fadil-fahrudin" className="img-about" width="100%" height="100%" />
                    <img src={doc2} alt="fadil-fahrudin" className="img-about" width="100%" height="100%" />
                    <p>
                        First project was at that time creating a static web portfolio using HTML CSS and javascript. and while studying in 2022, for the first time I worked in the web developer section to build a social website the Gerakan Infaq Nutrisi, starting from UI design using Figma and then slicing to code HTML, CSS, and Javascript. At the time I build this website, I use the Laravel framework. But this project has not been resumed until now from my office.
                    </p>
                    <p>
                        For my undergraduate finals, I created an Android-based crowdfunding app using React Native. Before that I didn't really understand React until I found a bootcamp class on <a href="https://buildwithangga.com/">Build with Angga</a> regarding creating an Android Food Market application that uses React Native for mobile applications and Laravel as a Content Management System and I was able to complete this class.
                    </p>

                    <img src={doc4} alt="fadil-fahrudin" className="img-about" width="100%" height="100%" />
                    <p>
                        I find out about React, read about documents, and always try it in my simple project. and I continue my study case to make Android Application for my final undergraduate exams and about six months I finished this project.
                    </p>
                    <p>
                        As you can see, I built this website with my favorite tech stack and one of them is React. 🦾⚔️
                    </p>
                </article>
            </div>

            {/* experience */}
            <div className="experience">
                <h5>Work Experience</h5>
                <hr />
                <div className="company-identity">
                    <img src={logoMnc} alt="" className="company-logo" width="100%" height="100%" />
                    <img src={logoSb} alt="" className="company-logo" width="100%" height="100%" />
                    <img src={logoLaju} alt="" className="company-logo" width="100%" height="100%" />
                </div>
                <div className="wrapp-card-experience" ref={ref}>
                    {experiences.list.map(item => (
                        <CardExperience key={item.id} job={item.job} location={item.location} duration={item.duration} />

                    ))}
                </div>
                <div className="swipe-wrapp">
                    <button type="button" className="btn btn-swipe" onClick={() => swipe(-400)}>&#8592;</button>
                    <button type="button" className="btn btn-swipe" onClick={() => swipe(400)}>&#8594;</button>
                </div>
                {/* {experiences.list.length > 3 ?
                    <div className="swipe-wrapp">
                        <button type="button" className="btn btn-swipe" onClick={() => swipe(-400)}>&#8592;</button>
                        <button type="button" className="btn btn-swipe" onClick={() => swipe(400)}>&#8594;</button>
                    </div>
                    : null
                } */}
            </div>
        </main>
    )
}

export default About;