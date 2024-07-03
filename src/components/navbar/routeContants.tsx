import React, {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {IoSearchOutline} from "react-icons/io5";
import {FaRegHeart} from "react-icons/fa";
import {MdOutlineShoppingCart} from "react-icons/md";
import {RiExchangeDollarFill} from "react-icons/ri";
import {Link} from "react-router-dom";
import {Input} from "@/components/ui/input.tsx";

export const headerLinks = [
    {
        label: "Home",
        route: "/"
    },
    {
        label: "Shop",
        route: "/shop"
    },
    {
        label: "About Us",
        route: "/about"
    },
    {
        label: "Contact Us",
        route: "/contact"
    }
];

export const QueryItems: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const navigate = useNavigate();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setSearchQuery(""); // reset the search query on successful search
        }
    };

    return (
        <div className="lg:flex items-center">
            <form onSubmit={handleSearch} className="relative lg:px-10">
                <IoSearchOutline className="absolute top-3 text-lg text-[#000] lg:left-12 left-5"/>
                <Input
                    className="text-[#000] font-bold rounded-full lg:px-8 px-10"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                />
            </form>
            <div className="flex gap-5 lg:mt-0 mt-5">
                <RiExchangeDollarFill size={25}/>
                <Link to="/favorites">
                    <FaRegHeart size={25}/>
                </Link>
                <Link to="/cart">
                    <MdOutlineShoppingCart size={25}/>
                </Link>
            </div>
        </div>
    );
};
