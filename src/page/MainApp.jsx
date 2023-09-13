import { ExpatiseComponent, JumbotronComponent, MainContentComponent } from "../component/molecules";
import onLoadData from "../utils/skeleton";

const MainApp = () => {
    let startTime = performance.now();
    window.addEventListener('load', () => {
        let endTime = performance.now();
        let loadTime = endTime - startTime;
        setInterval(() => {
            onLoadData();
        }, loadTime)
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