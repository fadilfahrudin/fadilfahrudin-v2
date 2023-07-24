import { gerakanInfaqNutrisi, logoBootstrap, logoCss, logoFigma, logoGithub, logoHtml, logoJs, logoLaravel, logoPhp, sbAdmin, sbApps, studyApp } from "../assets/img";
import ToolsStack from "../component/atoms/Tools";
import { CardComponent, FooterComponent, JumbotronComponent, NavbarComponent } from "../component/molekuls";

const MainApp = () => {
    return (
        <div className="container">
            <NavbarComponent />
            <JumbotronComponent />
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
            <main className="card-wrapp">
                <CardComponent backgroundColor={'#FF6768'} img={sbApps} nameProject={'Donation App'} />
                <CardComponent backgroundColor={'#B9CEFC'} img={studyApp} nameProject={'Study App'} />
                <CardComponent backgroundColor={'#F5C7F7'} img={gerakanInfaqNutrisi} nameProject={'Web Donation'} />
                <CardComponent backgroundColor={'#FEF0CD'} img={sbAdmin} nameProject={'Content Management System'} />
            </main>
            <footer>
                <FooterComponent />
            </footer>
        </div>
    );
};

export default MainApp;