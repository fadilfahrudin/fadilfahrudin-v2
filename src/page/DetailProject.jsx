/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { defaulBanner } from "../assets/img";
import { useEffect, useState } from "react";
import APIConfig from "../config/APIConfig";

const DetailProject = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [banner, setBanner] = useState(defaulBanner);
    const [createdAt, setCreatedAt] = useState();
    const [author, setAuthor] = useState('');
    const [techId, settechId] = useState('');
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
        <div className="detail-page">
            <div className="detail-article-wrapp">
                <main>
                    <div className="breadchumb">
                        Project / detail
                    </div>
                    <div className="banner-content">
                        <img src={banner} alt="banner" width={650} height={354} />
                    </div>
                    <h1 className="header-article">
                        {title.slice(0, 1).toUpperCase() + title.slice(1)}
                    </h1>
                    <div className="info-created">
                        <p>{newDate} | {author.slice(0, 1).toUpperCase() + author.slice(1)}</p>
                        <div className="socialmedia-body">
                            <p>Tech Stacks:</p>
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
                    </article>
                </main>
                <button type="button" className="btn-visit-project">Visit project app</button>
                {/* <aside> */}
                {/* <div className="author-card"></div> */}
                {/* <div className="socialmedia-card">
                        <h3 className="socialmedia-header">Tech Staks</h3>
                        <div className="socialmedia-body">
                            <ul className="sos-wrapp">
                                <li><a href="#">
                                    <img src={logoIg} className="sos-item" />
                                </a></li>
                                <li><a href="#">
                                    <img src={logoYoutube} className="sos-item" />
                                </a></li>
                                <li><a href="#">
                                    <img src={logoDribbble} className="sos-item" />
                                </a></li>
                            </ul>
                        </div>
                    </div> */}
                {/* <div className="recommended-card">
                        <div className="recommended-body">
                            <h2 className="recommended-header">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda modi blanditiis a delectus beatae pariatur officia esse. Molestias mollitia magnam cumque perspiciatis sapiente quaerat, ut nulla ipsam optio. Corrupti, deserunt?</h2>
                            <p>18 Ags 2021</p>
                        </div>
                        <img src={defaulBanner} alt="recomended title" className="recommended-thumb" />
                    </div> */}
                {/* </aside> */}
            </div>
        </div>
    )
}

export default DetailProject;