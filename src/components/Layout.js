import HeaderNav from "./HeaderNav";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

function Layout(){
    const { pathname } = useLocation();
    // Automatically scrolls to top whenever pathname changes

  
    return (
        <div>
            <HeaderNav />
            <Header path={pathname} />
            <Outlet />
            <Footer />
        </div>
    )
}


export default Layout;