import { Route, Routes } from "react-router-dom";
import { About, MainApp, Project } from "../page";
import { FooterComponent, NavbarComponent } from "../component/molecules";


const AppRoutes = () => {
    return (
        <div className="container">
            {/* Navbar */}
            <NavbarComponent />

            {/* routes */}
            <Routes>
                <Route path="/" element={<MainApp />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
            </Routes>

            {/* Footer */}
            <FooterComponent />
        </div>
    )
}

export default AppRoutes;