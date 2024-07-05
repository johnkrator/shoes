import Container from "@/Container.tsx";
import {MdOutlineStar} from "react-icons/md";
import locator from "@/assets/product-details/Vector.png";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import pickup from "@/assets/product-details/Group 49533.png";
import delivery from "@/assets/product-details/Group 49534.png";
import returnPolicy from "@/assets/product-details/Group 49535.png";

const ProductReview = () => {
    return (
        <div className="bg-[#ff6b2d] text-white">
            <Container>
                <div className="flex lg:flex-row flex-col lg:gap-10 gap-5 py-5">
                    <div className="lg:w-[55vw]">
                        <h1 className="text-[40px] font-bold underline">Reviews</h1>
                        <div className="flex flex-col gap-3 bg-[#fee8e1] text-black rounded-xl p-5">
                            <div>
                                <h5><span className="font-bold">Candace Jones.</span> Verified buyer</h5>
                                <div className="flex items-center gap-1">
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                </div>
                                <p className="text-sm">
                                    These are gorgeous. Bought these for my gym activities. I love them
                                </p>
                            </div>

                            <div>
                                <h5><span className="font-bold">Phill Brown.</span> Verified buyer</h5>
                                <div className="flex items-center gap-1">
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                </div>
                                <p className="text-sm">
                                    These are gorgeous. Bought these for my gym activities. I love them
                                </p>
                            </div>

                            <div>
                                <h5><span className="font-bold">Anonymous.</span></h5>
                                <div className="flex items-center gap-1">
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                </div>
                                <p className="text-sm">
                                    Fabulous sneakers Such a beautiful and unique sneaker I absolutely love them so much
                                    that I purchased three colors. I get compliments every time I wear them!
                                </p>
                            </div>

                            <div>
                                <h5><span className="font-bold">Wendy Fuutu.</span></h5>
                                <div className="flex items-center gap-1">
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                    <MdOutlineStar className="text-[#e0551b]"/>
                                </div>
                                <p className="text-sm">Amazing and very comfortable.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 lg:w-[40vw] bg-[#fee8e1] text-black rounded-xl p-5">
                        <h4 className="text-[#f46e18] font-bold">Delivery and Returns</h4>
                        <div className="flex items-center gap-5">
                            <h5 className="font-bold text-sm">Choose your location</h5>
                            <img src={locator} className="w-[19px] h-[19px]" alt=""/>
                        </div>
                        <div>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select Address"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={pickup} className="w-[68px] h-[51px]" alt=""/>
                            <div>
                                <h4 className="text-sm font-bold">Pickup Station</h4>
                                <p className="text-xs">
                                    Delivery Fees $ 5 <br/>
                                    Pickup your package at the station within 2 hours when you make an order
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src={delivery} className="w-[68px] h-[51px]" alt=""/>
                            <div>
                                <h4 className="text-sm font-bold">Door Delivery</h4>
                                <p className="text-xs">
                                    Delivery fees $15 <br/>
                                    When you make an order, our delivery agent will contact you shortly.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src={returnPolicy} className="w-[68px] h-[51px]" alt=""/>
                            <div>
                                <h4 className="text-sm font-bold">Return Policy</h4>
                                <p className="text-xs">
                                    Free return within 7 days of eligible items.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProductReview;
