import { Route, Routes } from "react-router-dom";
import { About, DetailProject, MainApp, Project } from "../page";
import { BNComponents, FooterComponent, NavbarComponent } from "../component/molecules";
import ScrollToTop from "../utils/scrollToTop";


const AppRoutes = () => {
    return (
        <div id="app-route" className="container">
            {/* Navbar */}
            <NavbarComponent />
            <ScrollToTop />

            {/* Routes */}
            <Routes>
                <Route path="/" element={<MainApp />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/project/:slug/:id" element={<DetailProject />} />
            </Routes>

            {/* Bottom navigation */}
            <BNComponents />

            {/* Footer */}
            <FooterComponent />
        </div>
    )
}

export default AppRoutes;