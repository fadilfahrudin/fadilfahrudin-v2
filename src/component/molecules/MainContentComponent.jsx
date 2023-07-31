import { gerakanInfaqNutrisi, sbAdmin, sbApps, studyApp } from "../../assets/img";
import CardComponent from "./CardComponent";

const MainContentComponent = () => {
    return (
        <main className="card-wrapp">
            <CardComponent backgroundColor={'#FF6768'} img={sbApps} nameProject={'Donation App'} />
            <CardComponent backgroundColor={'#B9CEFC'} img={studyApp} nameProject={'Study App'} />
            <CardComponent backgroundColor={'#F5C7F7'} img={gerakanInfaqNutrisi} nameProject={'Web Donation'} />
            <CardComponent backgroundColor={'#FEF0CD'} img={sbAdmin} nameProject={'Content Management System'} />
        </main>
    )
}

export default MainContentComponent;