import { logoBootstrap, logoFigma, logoJs, logoRn, logoSass } from "../../assets/img";
import onLoadData from "../../utils/skeleton";
import ToolsStack from "../atomic/Tools";

const ExpatiseComponent = () => {
    window.addEventListener('load', () => {
        onLoadData();
    })
    return (
        <section className="expartise">
            <h4>My favorite tech stack:</h4>
            <div className="tools-stack">
                <ToolsStack icon={logoJs} nameIcon={'Javascript'} height={30} width={30} />
                <ToolsStack icon={logoRn} nameIcon={'React'} height={30} width={30} />
                <ToolsStack icon={logoSass} nameIcon={'Sass'} height={30} width={30} />
                <ToolsStack icon={logoBootstrap} nameIcon={'Bootstrap'} height={30} width={30} />
                <ToolsStack icon={logoFigma} nameIcon={'Figma'} height={30} width={30} />
            </div>
        </section>
    )
}

export default ExpatiseComponent;