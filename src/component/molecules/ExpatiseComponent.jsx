import { logoBootstrap, logoCss, logoFigma, logoGithub2, logoHtml, logoJs, logoLaravel, logoRn } from "../../assets/img";
import onLoadData from "../../utils/skeleton";
import ToolsStack from "../atomic/Tools";

const ExpatiseComponent = () => {
    window.addEventListener('load', () => {
        onLoadData();
    })
    return (
        <section className="expartise">
            <h4>Current favorite tech stack:</h4>
            <div className="tools-stack">
                <ToolsStack icon={logoJs} nameIcon={'Javascript'} height={30} width={30} />
                <ToolsStack icon={logoHtml} nameIcon={'HTML'} height={30} width={30} />
                <ToolsStack icon={logoCss} nameIcon={'CSS'} height={30} width={30} />
                <ToolsStack icon={logoRn} nameIcon={'React'} height={30} width={30} />
                <ToolsStack icon={logoGithub2} nameIcon={'Github'} height={30} width={30} />
                <ToolsStack icon={logoBootstrap} nameIcon={'Bootstrap'} height={30} width={30} />
                <ToolsStack icon={logoFigma} nameIcon={'Bootstrap'} height={30} width={30} />
                <ToolsStack icon={logoLaravel} nameIcon={'Bootstrap'} height={30} width={30} />
            </div>
        </section>
    )
}

export default ExpatiseComponent;