import { icDuration, icLocation, icWorker } from "../../assets/icon";

const CardExperience = () => {
    return (
        <div className="card-experience">
            <div className=" job-name"><img src={icWorker} alt="Job Title" /> Junior Web Developer</div>
            <div className=" job-location"><img src={icLocation} alt="Location" /> Semangat Bantu</div>
            <div className=" job-duration"><img src={icDuration} alt="Time" /> Jan 2022 - Jan 2023</div>
        </div>
    )
}

export default CardExperience;