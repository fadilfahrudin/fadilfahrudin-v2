/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { CardProject } from "../component/molecules";

const Project = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getProject()
    }, [])

    const getProject = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/articles`)
            const articles = await response.json();
            setArticles(articles.result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="project">
            <div className="wrapp-card-project">
                {articles.map(article => (
                    <CardProject key={article.id} header={article.title} excerpt={article.excerpt} brandProject={article.logo_project} stackId={article.techStackId} />
                ))}
            </div>
        </div>
    )
}

export default Project;