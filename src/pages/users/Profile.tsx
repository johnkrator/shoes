import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useProfileMutation} from "@/redux/api/userApiSlice.ts";
import {toast} from "react-toastify";
import {setCredentials} from "@/redux/features/authSlice.ts";
import {RootState} from "@/redux/store.ts";
import {Input} from "@/components/ui/input.tsx";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {Button} from "@/components/ui/button.tsx";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {toastConfig} from "@/components/toastConfig.ts";
import Container from "@/Container.tsx";
import {SkeletonDemo} from "@/components/Loader.tsx";

const Profile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [updateProfile, {isLoading}] = useProfileMutation();

    const {userInfo} = useSelector((state: RootState) => state.auth);

    const {search} = useLocation();
    const searchParam = new URLSearchParams(search);
    const redirect = searchParam.get("redirect") || "/profile";

    useEffect(() => {
        if (userInfo) {
            setFirstName(userInfo.firstName);
            setLastName(userInfo.lastName);
            setEmail(userInfo.email);
            setPhoneNumber(userInfo.phoneNumber);
        }
    }, [userInfo]);

    const validateForm = () => {
        if (!firstName || !lastName || !email || !phoneNumber) {
            toast.error("All fields are required", toastConfig);
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Invalid email format", toastConfig);
            return false;
        }
        if (password && !/^[a-zA-Z0-9]{8,30}$/.test(password)) {
            toast.error("Password must be 8-30 characters long and include only letters and numbers", toastConfig);
            return false;
        }
        if (!/^0\d{10}$/.test(phoneNumber)) {
            toast.error("Invalid phone number format", toastConfig);
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await updateProfile({firstName, lastName, email, password, phoneNumber}).unwrap();
            dispatch(setCredentials({...response}));
            navigate(redirect);
            toast.success("Profile updated successfully!", toastConfig);
        } catch (error: any) {
            console.error(error);
            toast.error(error?.data?.message || error.message || "An error occurred while updating the profile", toastConfig);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container>
            <section className="flex flex-col items-center justify-center min-h-screen">
                <h2 className="text-2xl font-bold">Update Profile</h2>

                <form onSubmit={handleSubmit}>
                    <div className="flex md:flex-row flex-col items-center md:gap-2 my-[2rem]">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="firstName" className="block text-sm font-bold">
                                First Name
                            </label>
                            <Input
                                className="w-[15rem] border border-gray-500"
                                type="text"
                                placeholder="Enter your first name"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-1 md:mt-0 mt-[2rem]">
                            <label htmlFor="lastName" className="block text-sm font-bold">
                                Last Name
                            </label>
                            <Input
                                className="w-[15rem] border border-gray-500"
                                type="text"
                                placeholder="Enter your Last Name"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 my-[2rem]">
                        <label htmlFor="email" className="block text-sm font-bold">
                            E-mail Address
                        </label>
                        <Input
                            className="md:w-[30rem] border border-gray-500 w-full"
                            type="email"
                            placeholder="Enter email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-1 my-[2rem]">
                        <label htmlFor="password" className="block text-sm font-bold">
                            Password
                        </label>
                        <div className="relative">
                            <Input
                                className="md:w-[30rem] border border-gray-500 w-full"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter new password (optional)"
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

                    <div className="flex flex-col gap-1 my-[2rem]">
                        <label htmlFor="phoneNumber" className="block text-sm font-bold">
                            Phone Number
                        </label>
                        <Input
                            className="md:w-[30rem] border border-gray-500 w-full"
                            type="text"
                            placeholder="Enter Phone Number"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>

                    <div className="flex md:flex-row flex-col items-center justify-between">
                        <Button
                            className="bg-[#FF773E] hover:bg-[#FF773E] font-bold w-[10rem]"
                            disabled={isLoading}
                            type="submit"
                        >
                            {isLoading ? "Updating..." : "Update Profile"}
                        </Button>

                        <Link to="/orders" className="mt-4 text-gray-500 hover:underline">
                            My Orders
                        </Link>
                    </div>

                    {isLoading && <SkeletonDemo/>}
                </form>
            </section>
        </Container>
    );
};

export default Profile;
