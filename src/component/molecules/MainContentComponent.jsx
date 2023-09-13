import { useNavigate } from "react-router-dom";
import { gerakanInfaqNutrisi, sbAdmin, sbApps, studyApp } from "../../assets/img";
import CardComponent from "./CardComponent";
import onLoadData from "../../utils/skeleton";

const MainContentComponent = () => {
    window.addEventListener('load', () => {
        onLoadData();
    })
    const navigate = useNavigate()
    return (
        <main className="main-project">
            <h4>Project List</h4>
            <div className="card-wrapp">
                <CardComponent left={'80px'} bottom={'50px'} idCard={0} imgWidth={'70%'} imgHeight={'100%'} backgroundColor={'#FF6768'} img={sbApps} nameProject={'Donation App'} title={'Semangat Bantu App'} subtitle={'Semangat Bantu Apps is mobile crowdfunding for donate every social program.'} link={() => navigate('project/semangat-bantu-apps/14')} />
                <CardComponent left={'50px'} bottom={'20px'} idCard={1} imgWidth={'70%'} imgHeight={'100%'} backgroundColor={'#B9CEFC'} img={studyApp} nameProject={'Study App'} link={() => window.open('https://www.figma.com/proto/appGQq4bZKufOM3zblyenb/UI-APP-Study?page-id=136%3A71&node-id=1001-1193&starting-point-node-id=1001%3A1190&mode=design&t=p6DxLHq39bI0hOyM-1', '_blank')} title={"Arabic For Kids"} subtitle={"UI design for Arabic learning application."} />
                <CardComponent left={'70px'} bottom={'100px'} idCard={2} imgWidth={'70%'} imgHeight={'100%'} backgroundColor={'#F5C7F7'} img={gerakanInfaqNutrisi} nameProject={'Web Donation'} title={'Gerakan Infaq Nutrisi'} subtitle={'Web design for the Nutrition program given to orphans and the poor.'} />
                <CardComponent left={'50px'} bottom={'115px'} idCard={3} imgWidth={'85%'} imgHeight={'100%'} backgroundColor={'#FEF0CD'} img={sbAdmin} nameProject={'Content Management System'} title={'CMS'} subtitle={'Content Management System for Semangat Bantu App.'} />
            </div>
            <button className="more-project-btn" onClick={() => navigate('/project')}>More project</button>
        </main>
    )
}

export default MainContentComponent;