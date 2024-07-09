import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useProfileMutation} from "@/redux/api/userApiSlice.ts";
import {toast} from "react-toastify";
import {setCredentials} from "@/redux/features/authSlice.ts";
import {RootState} from "@/redux/store.ts";
import {Input} from "@/components/ui/input.tsx";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {Button} from "@/components/ui/button.tsx";
import {Loader} from "lucide-react";
import {Link} from "react-router-dom";

const Profile = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {userInfo} = useSelector((state: RootState) => state.auth);

    const [updateProfile, {isLoading: loadingUpdateProfile}] = useProfileMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        setUsername(userInfo.username);
        setEmail(userInfo.email);
    }, [userInfo.email, userInfo.username]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Password does not match");
        } else {
            try {
                const response = await updateProfile({
                    _id: userInfo._id,
                    username,
                    email,
                    password
                }).unwrap();
                dispatch(setCredentials({...response}));
                toast.success("Profile updated successfully");
            } catch (error: any) {
                toast.error(error?.data?.message || error.message);
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="">
            <div className="">
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <h2 className="text-2xl font-bold">Update Profile</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="my-[2rem]">
                            <label htmlFor="username"
                                   className="block text-sm font-medium text-gray-500">Username</label>
                            <Input
                                className="w-[30rem]"
                                type="text"
                                placeholder="Enter username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="my-[2rem]">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-500">Email
                                Address</label>
                            <Input
                                className="w-[30rem]"
                                type="email"
                                placeholder="Enter email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="my-[2rem]">
                            <label htmlFor="password"
                                   className="block text-sm font-medium text-gray-500">Password</label>
                            <div className="relative">
                                <Input
                                    className="w-[30rem]"
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
                        <div className="my-[2rem]">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-500">Confirm
                                Password</label>
                            <div className="relative">
                                <Input
                                    className="w-[30rem]"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />

                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    onClick={toggleConfirmPasswordVisibility}
                                >
                                    {showConfirmPassword ? <AiOutlineEyeInvisible size={20}/> :
                                        <AiOutlineEye size={20}/>}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-row gap-2 items-center">
                            <Button
                                className="bg-[#ff6b2d] hover:bg-[#ff6b2d] font-bold"
                                disabled={loadingUpdateProfile} type="submit">
                                Update Profile
                            </Button>

                            <Link to="/user-orders" className="underline">
                                My Orders
                            </Link>

                            {loadingUpdateProfile && <Loader/>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
