import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NavItems from "./NavItems.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu.tsx";
import MobileView from "./MobileView.tsx";
import Logo from "./Logo.tsx";
import { QueryItems } from "./routeContants.tsx";
import Container from "@/Container.tsx";
import { RootState } from "@/redux/store.ts";
import { logout } from "@/redux/features/authSlice.ts";
import { toast } from "react-toastify";
import { toastConfig } from "@/components/toastConfig.ts";

const Navigation = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    sessionStorage.removeItem("jwtToken");
    document.cookie =
      "jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    dispatch(logout());
    navigate("/");

    toast.success("Logged out successfully", toastConfig);
    console.log("Logged out successfully");
  };

  return (
    <div className="sticky top-0 z-20 bg-[#000] text-white shadow">
      <Container className="flex items-center justify-between py-3">
        <Logo />
        <div className="flex flex-row items-center justify-end gap-4 lg:gap-6 xl:gap-10 flex-grow">
          <div className="md:block hidden">
            <NavItems />
          </div>
          <div className="flex items-center justify-end gap-3 w-auto min-w-[100px]">
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <span className="whitespace-nowrap text-sm lg:text-base">
                    {userInfo
                      ? `Hello, ${userInfo.user.firstName}`
                      : "Join | Sign In"}
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {userInfo ? (
                    <>
                      <Link className="font-bold" to="/profile">
                        <DropdownMenuItem className="cursor-pointer capitalize">
                          Profile
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem
                        className="cursor-pointer capitalize font-bold"
                        onClick={handleLogout}
                      >
                        Logout
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <Link className="font-bold" to="/login">
                      <DropdownMenuItem className="cursor-pointer capitalize">
                        Get Started
                      </DropdownMenuItem>
                    </Link>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <MobileView />
          </div>
          <div className="lg:block hidden">
            <QueryItems />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
