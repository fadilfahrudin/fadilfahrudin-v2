import { ExpatiseComponent, JumbotronComponent, MainContentComponent } from "../component/molecules";

const MainApp = () => {
    return (
        <div>
            {/* Jumbotron */}
            <JumbotronComponent />

            {/* Expatise */}
            <ExpatiseComponent />

            {/* Main Card */}
            <MainContentComponent />
        </div>
    );
};

export default MainApp;