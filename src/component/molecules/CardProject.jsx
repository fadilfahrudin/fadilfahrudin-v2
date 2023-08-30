/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ToolsStack from "../atomic/Tools";
import { useNavigate } from "react-router-dom";
import APIConfig from "../../config/APIConfig";

const CardProject = ({ header, excerpt, brandProject, stackId, articleId }) => {
    const navigate = useNavigate()
    const techStackId = stackId.split(",")
    const [data, setData] = useState([])

    useEffect(() => {
        getStack()
    }, [])

    const getStack = async () => {
        try {
            const response = await fetch(`${APIConfig.baseUrl}/techstacks`)
            const data = await response.json()
            setData(data.result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="card-project">
            <div className="main-card">
                <h5 className="header-card">{header}</h5>
                <div className="body-text-card"><p>{excerpt}</p><button type="button" className="more-details" onClick={() => navigate(`/project/${articleId}`)}>Click here for more detail &#8674;</button></div>
                <div className="teach-stack">
                    {techStackId.map(techId => {
                        const filter = data.filter((stack) => stack.id == techId)
                        return filter.map((item) => (
                            <ToolsStack key={item.id} icon={item.iconUrl} nameIcon={item.name} width={26} height={26} />
                        ))
                    })}
                </div>
            </div>
            <img src={brandProject} alt="Behance" className="brand-project" width='100%' height='100%' />
        </div>
    )
}

export default CardProject;