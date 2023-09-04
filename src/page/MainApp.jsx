import { ExpatiseComponent, JumbotronComponent, MainContentComponent } from "../component/molecules";

const MainApp = () => {
    return (
        <main>
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