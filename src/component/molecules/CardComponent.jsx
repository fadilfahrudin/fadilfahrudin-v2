import onLoadData from "../../utils/skeleton";

// eslint-disable-next-line react/prop-types
const CardComponent = ({ title, subtitle, backgroundColor, img, nameProject, idCard, imgWidth, imgHeight, link }) => {

    const stylesCard = {
        backgroundColor: backgroundColor,
    }
    const btnOver = () => {
        const bgHover = document.getElementsByClassName("bg-hover")[idCard];
        const arrowicon = document.getElementsByClassName("arrowicon")[idCard];
        bgHover.style.backgroundColor = 'rgba(0, 0, 0, 0.534)';
        arrowicon.style.color = "#fff";
    }
    const btnOverLeave = () => {
        const bgHover = document.getElementsByClassName("bg-hover")[idCard];
        const arrowicon = document.getElementsByClassName("arrowicon")[idCard];
        bgHover.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        arrowicon.style.color = "#000";

    }
    const cardOver = () => {
        const imgProject = document.getElementsByClassName('img-project')[idCard];
        imgProject.style.transform = "scale(105%)";
        imgProject.style.cursor = "pointer";
    }

    const cardOverLeave = () => {
        const imgProject = document.getElementsByClassName('img-project')[idCard];
        imgProject.style.transform = "scale(100%)";
        imgProject.style.cursor = "default";
    }

    return (
        <div className="loading card" style={stylesCard} id={idCard} onClick={link} onMouseOver={cardOver} onMouseLeave={cardOverLeave} >
            <div className="bg-hover"></div>
            <div className="main-card-title">
                <h5>{title}</h5>
                <div className="card-sub">
                    <p>{subtitle}</p>
                </div>
                <button type="button" className="wrapp-btn-circle" onMouseLeave={btnOverLeave} onMouseOver={btnOver}>
                    <i className="btn-arrowCircle"></i>
                    <i className="arrowicon">&#10132;</i>
                </button>
            </div>
            <div className="wrapp-img-project">
                <img src={img} className="img-project" alt={nameProject} width={imgWidth} height={imgHeight} onLoad={() => onLoadData()} />
            </div>
        </div>
    )
}

export default CardComponent;