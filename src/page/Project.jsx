/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { CardProject } from "../component/molecules";
import APIconfig from "../config/APIConfig"
import onLoadData from "../utils/skeleton";

const Project = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getProject()
    }, [])

    const getProject = async () => {
        try {
            const response = await fetch(`${APIconfig.baseUrl}/articles`)
            const articles = await response.json();
            setArticles(articles.result);
            setInterval(() => {
                onLoadData();
            }, 500)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="project">
            <div className="wrapp-card-project">
                {articles.map(article => (
                    <CardProject key={article.id} header={article.title} excerpt={article.excerpt} brandProject={article.logo_project} stackId={article.techStackId} articleId={article.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Project;