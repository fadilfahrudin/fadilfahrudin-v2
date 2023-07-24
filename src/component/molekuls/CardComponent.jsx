import { logoFigma } from "../../assets/img"
import ToolsStack from "../atoms/Tools"

// eslint-disable-next-line react/prop-types
const CardComponent = ({ backgroundColor, img, nameProject }) => {

    const styles = {
        backgroundColor: backgroundColor
    }

    return (
        <div className="card loading" style={styles}>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, tempora Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit debitis earum vel. Et voluptas veniam ratione similique officiis beatae odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, perferendis!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet?</h5>
            <img src={img} className="img-project" alt={nameProject} />
            <div className="tools-stack-project">
                <ToolsStack icon={logoFigma} nameIcon={'Figma'} />
                <ToolsStack icon={logoFigma} nameIcon={'Figma'} />
            </div>
        </div>
    )
}

export default CardComponent;