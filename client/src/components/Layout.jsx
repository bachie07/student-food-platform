import Navbar from "./Navbar";
import BottomBar from "./BottomBar";
import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
import { useState } from "react";

const Layout = () => {

    const [isOpen, setIsOpen] = useState(false);

    return( 

    <div className="flex flex-col min-h-screen bg-neutral-50">
        <Navbar onMenuClick={() => setIsOpen(true)}/>

        {isOpen && ( 

            <>
            <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}/>
            <SideBar isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            </>

        )}
        <main className="flex-1">
            <Outlet/>
        </main>
        <BottomBar/>
    </div>
    )

}


export default Layout;