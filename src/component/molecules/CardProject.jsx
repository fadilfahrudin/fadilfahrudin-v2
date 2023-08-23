/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ToolsStack from "../atomic/Tools";

const CardProject = ({ header, excerpt, brandProject, stackId }) => {
    const techStackId = stackId.split(",")
    const [data, setData] = useState([])

    useEffect(() => {
        getStack()
    }, [])

    const getStack = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/techstacks`)
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
                <div className="body-text-card"><p>{excerpt}</p><a href="#" className="more-details">click here more detail &#8674;</a></div>
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