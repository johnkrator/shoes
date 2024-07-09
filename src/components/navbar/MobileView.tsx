import {useSelector} from "react-redux";
import {GiHamburgerMenu} from "react-icons/gi";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import NavItems from "@/components/navbar/NavItems.tsx";
import {QueryItems} from "@/components/navbar/routeContants.tsx";
import {RootState} from "@/redux/store.ts";
import {Link} from "react-router-dom";

const MobileView = () => {
    const {userInfo} = useSelector((state: RootState) => state.auth);

    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger className="align-middle">
                    <GiHamburgerMenu size={25}/>
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-6 bg-white lg:hidden">
                    <Separator className="border border-gray-50"/>
                    <NavItems/>
                    <QueryItems/>
                    {!userInfo && (
                        <Link to="/login" className="font-bold text-lg">
                            Login / Sign Up
                        </Link>
                    )}
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileView;
