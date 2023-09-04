import { logoFigma } from "../../assets/img"
import ToolsStack from "../atomic/Tools"

// eslint-disable-next-line react/prop-types
const CardComponent = ({ backgroundColor, img, nameProject, idCard, imgWidth, imgHeight, left, bottom }) => {

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
        <div className="card loading" style={stylesCard} id={idCard} onMouseOver={cardOver} onMouseLeave={cardOverLeave}>
            <div className="bg-hover"></div>
            <div className="main-card-title">
                <h5>Lorem ipsum dolor sit amet</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, tempora Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit debitis earum vel. Et voluptas veniam ratione similique officiis beatae odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, perferendis!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet?</p>
                <button type="button" className="wrapp-btn-circle" onMouseLeave={btnOverLeave} onMouseOver={btnOver}>
                    <i className="btn-arrowCircle"></i>
                    <i className="arrowicon">&rarr;</i>
                </button>
            </div>
            <img src={img} className="img-project" alt={nameProject} width={imgWidth} height={imgHeight} style={styleImg} />
            <div className="tools-stack-project">
                <ToolsStack icon={logoFigma} nameIcon={'Figma'} height={30} width={30} />
                <ToolsStack icon={logoFigma} nameIcon={'Figma'} height={30} width={30} />
            </div>
        </div>
    )
}

export default CardComponent;