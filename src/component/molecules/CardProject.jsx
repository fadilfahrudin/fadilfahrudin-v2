import { gerakanInfaqNutrisi, logoPhp } from "../../assets/img";
import ToolsStack from "../atomic/Tools";

const CardProject = () => {
    return (
        <div className="card-project">
            <div className="left-content">
                <img src={gerakanInfaqNutrisi} alt="" className="img-project" />
                <div className="tech-stack">
                    <ToolsStack icon={logoPhp} nameIcon={'PHP'} width={26} height={26} />
                    <ToolsStack icon={logoPhp} nameIcon={'PHP'} width={26} height={26} />
                    <ToolsStack icon={logoPhp} nameIcon={'PHP'} width={26} height={26} />
                    <ToolsStack icon={logoPhp} nameIcon={'PHP'} width={26} height={26} />
                </div>
            </div>
            <div className="right-content">
                <h3>Semangat Bantu</h3>
                <p>As a donation app. I made this for my final exam at Pamulang University with a case study that I took at my place of work, namely Semangat Bantu.</p>
                <a href="#">See more details...</a>
            </div>
        </div>
    )
}

export default CardProject;