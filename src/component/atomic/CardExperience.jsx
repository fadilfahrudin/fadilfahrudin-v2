import { icDuration, icLocation, icWorker } from "../../assets/icon";

// eslint-disable-next-line react/prop-types
const CardExperience = ({ job, location, duration }) => {
    return (
        <div className="card-experience">
            <div className=" job-name"><img src={icWorker} alt="Job Title" />{job}</div>
            <div className=" job-location"><img src={icLocation} alt="Location" />{location}</div>
            <div className=" job-duration"><img src={icDuration} alt="Time" />{duration}</div>
        </div>
    )
}

export default CardExperience;