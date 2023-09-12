/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ToolsStack from "../atomic/Tools";
import { useNavigate } from "react-router-dom";
import APIConfig from "../../config/APIConfig";
import onLoadData from "../../utils/skeleton";

const CardProject = ({ header, excerpt, brandProject, stackId, articleId }) => {
    const navigate = useNavigate()
    const techStackId = stackId.split(",")
    const [data, setData] = useState([])
    const slug = header.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    useEffect(() => {
        getStack()
    }, [])

    const getStack = async () => {
        try {
            const response = await fetch(`${APIConfig.baseUrl}/techstacks`)
            const data = await response.json();
            setData(data.result);
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="card-project">
            <div className="main-card">
                {/* Skeleton */}
                <h5 className="loading header-card">{header}</h5>

                {/* Skeleton */}
                <p className="p-load loading"></p>
                <p className="p-load loading"></p>
                <div className="body-text-card load-item"><p>{excerpt}</p><button type="button" className="more-details" onClick={() => navigate(`/project/${slug}/${articleId}`)}>Click here for more detail &#8674;</button></div>

                {/* Skeleton */}
                <div className="teach-stack">

                    {techStackId.map(techId => {
                        const filter = data.filter((stack) => stack.id == techId)
                        return filter.map((item) => (
                            <ToolsStack key={item.id} icon={item.iconUrl} nameIcon={item.name} width={26} height={26} />
                        ))
                    })}
                </div>
            </div>
            {/* Skeleton */}
            <div className="loading brand-project">
                <img src={brandProject} alt="Behance" width='100%' height='100%' />
            </div>
        </div>
    )
}

export default CardProject;