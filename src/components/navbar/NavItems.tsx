import {headerLinks} from "@/components/navbar/routeContants.ts";
import {Link, useLocation} from "react-router-dom";

const NavItems = () => {
    const location = useLocation();

    return (
        <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
            {headerLinks.map((link) => {
                const isActive = location.pathname === link.route;

                return (
                    <li key={link.route}
                        className={`${isActive && "text-primary-500"} flex-center p-medium-16 whitespace-nowrap`}>
                        <Link to={link.route}>
                            {link.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavItems;
