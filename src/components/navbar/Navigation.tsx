import NavItems from "./NavItems.tsx";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuTrigger
} from "../ui/dropdown-menu.tsx";
import MobileView from "./MobileView.tsx";
import Logo from "./Logo.tsx";
import {QueryItems} from "./routeContants.tsx";
import Container from "@/Container.tsx";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 bg-[#000] text-white shadow">
            <Container className="flex items-center justify-between py-3">
                <Logo/>
                <div className="flex flex-row items-center justify-end gap-4 lg:gap-6 xl:gap-10 flex-grow">
                    {/*applies to both mobile and desktop*/}
                    <div className="md:block hidden">
                        <NavItems/>
                    </div>

                    <div className="flex items-center justify-end gap-3 w-auto min-w-[100px]">
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <span className="whitespace-nowrap text-sm lg:text-base">
                                        <span className="hidden lg:inline">Join | </span>Sign In
                                    </span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <Link className="font-bold" to="/login">
                                        <DropdownMenuItem className="cursor-pointer capitalize">
                                            get started
                                        </DropdownMenuItem>
                                    </Link>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        {/*mobile view*/}
                        <MobileView/>
                    </div>

                    {/*applies to both mobile and desktop*/}
                    <div className="lg:block hidden">
                        <QueryItems/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navigation;
