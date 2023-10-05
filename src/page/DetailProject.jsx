/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import APIConfig from "../config/APIConfig";
import onLoadData from "../utils/skeleton";

const DetailProject = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [banner, setBanner] = useState('');
    const [createdAt, setCreatedAt] = useState();
    const [author, setAuthor] = useState('');
    const [techId, settechId] = useState('');
    const [projectUrl, setProjectUrl] = useState('');
    const [techStacks, setTechStacks] = useState([]);
    const techStackId = techId.split(",");

    // Get Artilce
    useEffect(() => {
        getArticle()
    }, [])

    const getArticle = async () => {
        try {
            const response = await fetch(`${APIConfig.baseUrl}/article/${id}`)
            const data = await response.json()
            setTitle(data.title)
            setBanner(data.bannerUrl)
            setAuthor(data.author)
            setDescription(data.description)
            setCreatedAt(data.created_at)
            settechId(data.techStackId)
            setProjectUrl(data.projectLink)
            onLoadData();
        } catch (error) {
            console.log(error)
        }
    }

    // Get Stacks
    useEffect(() => {
        getStack()
    }, [])

    const getStack = async () => {
        try {
            const response = await fetch(`${APIConfig.baseUrl}/techstacks`)
            const data = await response.json()
            setTechStacks(data.result)
        } catch (error) {
            console.log(error)
        }
    }

    // Markup HTML
    const markup = { __html: description }


    // Set tanggal bulan tahun
    const monthName = [
        'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
        'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'
    ];

    const dateTime = new Date(createdAt)
    const date = dateTime.getDate();
    const month = monthName[dateTime.getMonth()];
    const year = dateTime.getFullYear();
    const newDate = month + " " + date + ", " + year
    // End set tanggal bulan tahun

    return (
        <div className="detail-page" >
            <div className="detail-article-wrapp">
                <main>
                    <div className="loading banner-content">
                        <img src={banner} alt="banner" width={650} height={354} />
                    </div>
                    <h1 className="loading header-article" >
                        {title.slice(0, 1).toUpperCase() + title.slice(1)}
                    </h1>
                    <div className="info-created">
                        <p className="loading p">{newDate} | {author.slice(0, 1).toUpperCase() + author.slice(1)}</p>
                        <div className="socialmedia-body">
                            <p>Tech Stacks:</p>
                            {/* Skeleton */}
                            <div className="icon-load-wrapp" >
                                <div className="icon-load loading"></div>
                                <div className="icon-load loading"></div>
                                <div className="icon-load loading"></div>
                            </div>
                            {/* End Skeleton */}
                            <ul className="sos-wrapp">
                                {techStackId.map(techId => {
                                    const filter = techStacks.filter((stack) => stack.id == techId)
                                    return filter.map((item) => (
                                        <li key={item.id}><a href="#">
                                            <img src={item.iconUrl} className="sos-item" />
                                        </a></li>
                                    ))
                                })}
                            </ul>
                        </div>
                    </div>
                    <article>
                        <div dangerouslySetInnerHTML={markup}></div>
                        {/* Skeleton */}
                        <p className="p-load loading"></p>
                        <p className="p-load loading"></p>
                        <p className="p-load loading"></p>
                        {/* End Skeleton */}
                    </article>
                </main>
                <a href={projectUrl} className="btn-visit-project">Visit project app</a>
            </div>
        </div>
    )
}

export default DetailProject;