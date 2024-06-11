import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "@/Container.tsx";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <ToastContainer/>
            {/*<Navigation/>*/}
            <div style={{flex: 1}}>
                <Container>
                    <Outlet/>
                </Container>
            </div>
            {/*<Footer/>*/}
        </div>
    );
};

export default Layout;
