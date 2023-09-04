import { gerakanInfaqNutrisi, sbAdmin, sbApps, studyApp } from "../../assets/img";
import CardComponent from "./CardComponent";

const MainContentComponent = () => {
    return (
        <main className="main-project">
            <h4>Project List</h4>
            <div className="card-wrapp">
                <CardComponent left={'80px'} bottom={'50px'} idCard={0} imgWidth={'70%'} imgHeight={'100%'} backgroundColor={'#FF6768'} img={sbApps} nameProject={'Donation App'} />
                <CardComponent left={'50px'} bottom={'20px'} idCard={1} imgWidth={'70%'} imgHeight={'100%'} backgroundColor={'#B9CEFC'} img={studyApp} nameProject={'Study App'} />
                <CardComponent left={'70px'} bottom={'100px'} idCard={2} imgWidth={'70%'} imgHeight={'100%'} backgroundColor={'#F5C7F7'} img={gerakanInfaqNutrisi} nameProject={'Web Donation'} />
                <CardComponent left={'50px'} bottom={'115px'} idCard={3} imgWidth={'85%'} imgHeight={'100%'} backgroundColor={'#FEF0CD'} img={sbAdmin} nameProject={'Content Management System'} />
            </div>
            <button className="more-project-btn">More project</button>
        </main>
    )
}

export default MainContentComponent;