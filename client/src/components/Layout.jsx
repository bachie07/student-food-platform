import Navbar from "./Navbar";
import BottomBar from "./BottomBar";
import { Outlet } from "react-router-dom";

const Layout = () => {

    return( 

    <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-1">
            <Outlet/>
        </main>
        <BottomBar/>
    </div>
    )

}


export default Layout;