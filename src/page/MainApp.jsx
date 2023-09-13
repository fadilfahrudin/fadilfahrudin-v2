import { ExpatiseComponent, JumbotronComponent, MainContentComponent } from "../component/molecules";
import useDocumentTitle from "../utils/changeTitle";
import onLoadData from "../utils/skeleton";

const MainApp = () => {
    window.addEventListener('load', () => {
        onLoadData();
    })

    useDocumentTitle("Fadil Fahruddin")
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