import Logo from "@/components/navbar/Logo.tsx";
import NavItems from "@/components/navbar/NavItems.tsx";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import MobileView from "@/components/navbar/MobileView.tsx";
import {QueryItems} from "@/components/navbar/routeContants.tsx";


const Navigation = () => {
    return (
        <div
            className="flex items-center justify-between xl:px-20 md:px-10 sm:px-2 px-6 py-3 sticky top-0 z-20 bg-[#000] text-white shadow">
            <Logo/>
            <div className="flex flex-row items-center justify-end gap-10">

                {/*applies to both mobile and desktop*/}
                <div className="lg:block hidden">
                    <NavItems/>
                </div>

                <div className="flex items-center w-32 justify-end gap-3">
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                Join | Sign In
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>Subscription</DropdownMenuItem>
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
        </div>
    );
};

export default Navigation;
