import Container from "@/Container.tsx";
import {Input} from "@/components/ui/input.tsx";
import React, {useEffect, useState} from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {Button} from "@/components/ui/button.tsx";
import {Loader} from "lucide-react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Separator} from "@/components/ui/separator.tsx";
import LazyImage from "@/components/LazyImage.tsx";
import facebook from "@/assets/Group 49573.png";
import google from "@/assets/Group 49576.png";
import twitter from "@/assets/Group 49575.png";
import {useDispatch, useSelector} from "react-redux";
import {useLoginMutation} from "@/redux/api/userApiSlice.ts";
import {RootState} from "@/redux/store.ts";
import {setCredentials} from "@/redux/features/authSlice.ts";
import {toast} from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, {isLoading}] = useLoginMutation();

    const {userInfo} = useSelector((state: RootState) => state.auth);

    const {search} = useLocation();
    const searchParam = new URLSearchParams(search);
    const redirect = searchParam.get("redirect") || "/";

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await login({email, password}).unwrap();
            console.log(res);
            dispatch(setCredentials({...res}));
            navigate(redirect);
            toast.success("Login successful", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        } catch (error: any) {
            toast.error(error?.data?.message || error.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <Container>
                <section className="flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-2xl font-bold">Sign In To Your Account</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-1 my-[2rem]">
                            <label htmlFor="email" className="block text-sm font-bold">
                                Email Address
                            </label>
                            <Input
                                className="md:w-[30rem] border border-gray-500"
                                type="text"
                                placeholder="Enter email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-1 my-[2rem]">
                            <label htmlFor="password"
                                   className="block text-sm font-bold">Password</label>
                            <div className="relative">
                                <Input
                                    className="md:w-[30rem] border border-gray-500 pr-10"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <AiOutlineEyeInvisible size={20}/> : <AiOutlineEye size={20}/>}
                                </button>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col justify-between items-center">
                            <Button
                                disabled={isLoading}
                                className="bg-[#FF773E] hover:bg-[#FF773E] font-bold w-[10rem]"
                                type="submit">
                                {isLoading ? "Logging in..." : "Login"}
                            </Button>

                            <div className="flex justify-start mt-4">
                                <p>
                                    <span className="font-bold text-xs">New Customer?</span>
                                    <Link
                                        to={redirect ? `/register?redirect=${redirect}` : "/register"}
                                        className="ml-1 text-gray-500 hover:underline"
                                    >
                                        Create Account
                                    </Link>
                                </p>
                            </div>
                        </div>

                        {isLoading && <Loader/>}
                    </form>
                </section>

                <div className="flex flex-col gap-5 mb-10">
                    <div className="flex items-center justify-center md:gap-10 gap-5">
                        <Separator className="lg:w-[146.14px] w-20"/>
                        <span className="whitespace-nowrap font-bold">Or Sign Up with</span>
                        <Separator className="lg:w-[146.14px] w-20"/>
                    </div>

                    <div className="flex items-center justify-center gap-5">
                        <LazyImage className="object-cover w-[48px] h-[48px]" src={facebook} alt="facebook"/>
                        <LazyImage className="object-cover w-[48px] h-[48px]" src={google} alt="google"/>
                        <LazyImage className="object-cover w-[48px] h-[48px]" src={twitter} alt="twitter"/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;
