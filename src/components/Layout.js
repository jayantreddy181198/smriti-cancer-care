import HeaderNav from "./HeaderNav";
import { Outlet, useLocation } from "react-router-dom";

function Layout(){
    const { pathname } = useLocation();
    // Automatically scrolls to top whenever pathname changes

  
    return (
        <div>
            <HeaderNav />
        </div>
    )
}


export default Layout;