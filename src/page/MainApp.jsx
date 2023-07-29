import { ExpatiseComponent, FooterComponent, JumbotronComponent, MainContentComponent, NavbarComponent } from "../component/molekuls";

const MainApp = () => {
    return (
        <div className="container">
            {/* Navbar */}
            <NavbarComponent />

            {/* Jumbotron */}
            <JumbotronComponent />

            {/* Expatise */}
            <ExpatiseComponent />

            {/* Main Card */}
            <MainContentComponent />

            {/* Footer */}
            <FooterComponent />

        </div>
    );
};

export default MainApp;