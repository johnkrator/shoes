import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import {Separator} from "@/components/ui/separator";
import {GiHamburgerMenu} from "react-icons/gi";
import NavItems from "@/components/navbar/NavItems.tsx";

const MobileView = () => {
    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger className="align-middle">
                    <GiHamburgerMenu size={25}/>
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                    <Separator className="border border-gray-50"/>
                    <NavItems/>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileView;
