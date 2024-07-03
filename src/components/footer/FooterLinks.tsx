import {FaRegEnvelope} from "react-icons/fa";
import {BsTelephoneFill} from "react-icons/bs";

const FooterLinks = () => {
    return (
        <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-0 md:gap-5 gap-11 lg:mt-0 mt-10 w-[60vw]">
            <ul className="flex flex-col gap-3">
                <h1 className="font-bold">My account</h1>
                <li>Login/Register</li>
                <li>My account</li>
                <li>Order Status</li>
                <li>Order History</li>
                <li>Track my order</li>
            </ul>

            <ul className="flex flex-col gap-3">
                <h1 className="font-bold">Help</h1>
                <li>Get Help</li>
                <li>Order Status</li>
                <li>Returns</li>
                <li>Payment Options</li>
            </ul>

            <ul className="flex flex-col gap-3">
                <h1 className="font-bold">Company</h1>
                <li>About us</li>
                <li>News</li>
                <li>Service</li>
                <li>Our policy</li>
                <li>Customer care</li>
            </ul>

            <ul className="flex flex-col gap-3">
                <h1 className="font-bold">Hotlines</h1>
                <div className="flex items-center gap-1">
                    <FaRegEnvelope/>
                    <li>mail@trendyshoes.com</li>
                </div>
                <div className="flex items-center gap-1">
                    <BsTelephoneFill/>
                    <li>+2349099204983</li>
                </div>
            </ul>
        </div>
    );
};

export default FooterLinks;
