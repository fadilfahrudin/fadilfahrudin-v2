// import onLoadData from "../../utils/skeleton"
// eslint-disable-next-line react/prop-types
const CardComponent = ({ title, subtitle, backgroundColor, img, nameProject, idCard, imgWidth, imgHeight, left, bottom, link }) => {
    const stylesCard = {
        backgroundColor: backgroundColor,
    }
    const styleImg = {
        position: "absolute",
        left: left,
        bottom: bottom,
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
                    <i className="arrowicon">&rarr;</i>
                </button>
            </div>
            <img src={img} className="img-project" alt={nameProject} width={imgWidth} height={imgHeight} style={styleImg} />
        </div>
    )
}

export default CardComponent;