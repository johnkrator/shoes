import {GiHamburgerMenu} from "react-icons/gi";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import NavItems from "@/components/navbar/NavItems.tsx";
import {QueryItems} from "@/components/navbar/routeContants.tsx";

const MobileView = () => {
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
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileView;
