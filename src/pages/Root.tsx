import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import Drawer from "../components/Drawer/Drawer";

const style = {
    display: "flex",
}

const RootLayout = () => {
    return <>
        <MainNavigation />
        <main style={{ display: "flex" }}>
            <Drawer />
            <Outlet />
        </main>
    </>;
}

export default RootLayout;