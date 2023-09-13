import { ExpatiseComponent, JumbotronComponent, MainContentComponent } from "../component/molecules";
import onLoadData from "../utils/skeleton";

const MainApp = () => {
    window.addEventListener('load', () => {
        onLoadData();
    })
    return (
        <main className="main-app">
            {/* Jumbotron */}
            <JumbotronComponent />
            {/* Expatise */}
            <ExpatiseComponent />
            {/* Main Card */}
            <MainContentComponent />
        </main>
    );
};

export default MainApp;