import { logoBootstrap, logoCss, logoFigma, logoGithub, logoHtml, logoJs, logoLaravel, logoPhp } from "../../assets/img";
import ToolsStack from "../atomic/Tools";

const ExpatiseComponent = () => {
    return (
        <section className="expartise">
            <h5>Currently Favorite technology that
                accompanies me.</h5>
            <div className="tools-stack">
                <ToolsStack icon={logoJs} nameIcon={'Javascript'} height={30} width={30} />
                <ToolsStack icon={logoHtml} nameIcon={'HTML'} height={30} width={30} />
                <ToolsStack icon={logoCss} nameIcon={'CSS'} height={30} width={30} />
                <ToolsStack icon={logoPhp} nameIcon={'PHP'} height={30} width={30} />
                <ToolsStack icon={logoGithub} nameIcon={'Github'} height={30} width={30} />
                <ToolsStack icon={logoBootstrap} nameIcon={'Bootstrap'} height={30} width={30} />
                <ToolsStack icon={logoFigma} nameIcon={'Bootstrap'} height={30} width={30} />
                <ToolsStack icon={logoLaravel} nameIcon={'Bootstrap'} height={30} width={30} />
            </div>
        </section>
    )
}

export default ExpatiseComponent;