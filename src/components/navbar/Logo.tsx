import {Link} from "react-router-dom";
import logo from "@/assets/logo.png";

const Logo = () => {
    return (
        <div>
            <Link to="/">
                <img src={logo} className="md:w-[143.7px] w-[100px] md:h-[54px] h-[40px] object-cover" alt="logo"/>
            </Link>
        </div>
    );
};

export default Logo;
