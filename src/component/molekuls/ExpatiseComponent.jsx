import { logoBootstrap, logoCss, logoFigma, logoGithub, logoHtml, logoJs, logoLaravel, logoPhp } from "../../assets/img";
import ToolsStack from "../atoms/Tools";

const ExpatiseComponent = () => {
    return (
        <section className="expartise">
            <h5>Currently Favorite technology that
                accompanies me.</h5>
            <div className="tools-stack">
                <ToolsStack icon={logoJs} nameIcon={'Javascript'} />
                <ToolsStack icon={logoHtml} nameIcon={'HTML'} />
                <ToolsStack icon={logoCss} nameIcon={'CSS'} />
                <ToolsStack icon={logoPhp} nameIcon={'PHP'} />
                <ToolsStack icon={logoGithub} nameIcon={'Github'} />
                <ToolsStack icon={logoBootstrap} nameIcon={'Bootstrap'} />
                <ToolsStack icon={logoFigma} nameIcon={'Bootstrap'} />
                <ToolsStack icon={logoLaravel} nameIcon={'Bootstrap'} />
            </div>
        </section>
    )
}

export default ExpatiseComponent;