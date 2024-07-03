import {Link} from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavItems from "@/components/navbar/NavItems.tsx";
import MobileView from "@/components/navbar/MobileView.tsx";

const Navigation = () => {
    return (
        <div className="xl:px-20 md:px-10 sm:px-2 px-6 py-3 mb-10 sticky top-0 z-20 bg-white shadow">
            <div className="flex flex-row items-center justify-between">
                <div className="text-black text-lg font-bold">
                    <Link to="/">Home</Link>
                </div>

                {/*applies to both mobile and desktop*/}
                <div className="md:block hidden">
                    <NavItems/>
                </div>

                <div className="flex items-center w-32 justify-end gap-3">
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>Get Started</DropdownMenuTrigger>
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
            </div>
        </div>
    );
};

export default Navigation;
