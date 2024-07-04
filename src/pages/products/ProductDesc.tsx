import LazyImage from "@/components/LazyImage.tsx";
import shoe1 from "@/assets/product-details/pngwing.com (19) 1.png";
import shoe2 from "@/assets/product-details/pngwing.com (18) 1.png";
import shoe3 from "@/assets/product-details/pngwing.com (20) 1.png";
import orange from "@/assets/product-details/Ellipse 2317.png";
import yellow from "@/assets/product-details/Ellipse 2313.png";
import black from "@/assets/product-details/Ellipse 2314.png";
import red from "@/assets/product-details/Ellipse 2315.png";
import green from "@/assets/product-details/Ellipse 2316.png";
import {MdOutlineStar} from "react-icons/md";
import {IoStarHalf} from "react-icons/io5";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Button} from "@/components/ui/button.tsx";
import Container from "@/Container.tsx";

const ProductDesc = () => {
    return (
        <Container>
            <div className="flex lg:flex-row flex-col gap-5 pt-3">
                {/*product images*/}
                <div className="lg:w-[55vw] flex flex-col gap-3">
                    <div className="overflow-hidden w-full relative group rounded-lg">
                        <LazyImage
                            src={shoe1}
                            className="bg-[#fae5dd] py-5 rounded-xl object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                            alt={`Image of a shoe`}
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="overflow-hidden w-full relative group rounded-lg">
                            <LazyImage
                                src={shoe3}
                                className="bg-[#fae5dd] py-5 rounded-xl object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                                alt={`Image of a shoe`}
                            />
                        </div>
                        <div className="overflow-hidden w-full relative group rounded-lg">
                            <LazyImage
                                src={shoe2}
                                className="bg-[#fae5dd] py-5 rounded-xl object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                                alt={`Image of a shoe`}
                            />
                        </div>
                    </div>
                </div>

                {/*product details*/}
                <div className="lg:w-[40vw]">
                    <h1 className="text-[40px] font-bold text-[#e0551b]">Air Max</h1>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <p className="text-sm font-bold">Men’s sneaker shoes for outdoor walking</p>
                            <div className="flex items-center gap-5">
                                <span className="font-bold">$ 120</span>
                                <span className="line-through text-xs">$ 150</span>
                                <span className="text-[#e0551b] text-xs">-20%</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <MdOutlineStar className="text-[#e0551b]"/>
                                <MdOutlineStar className="text-[#e0551b]"/>
                                <MdOutlineStar className="text-[#e0551b]"/>
                                <MdOutlineStar className="text-[#e0551b]"/>
                                <IoStarHalf className="text-[#e0551b]"/>
                            </div>
                            <span className="text-xs font-bold">(2.5K Reviews)</span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <h4 className="text-base font-bold">Select Color</h4>
                            <div className="flex gap-1">
                                <img className="w-[38px] h-[38px] cursor-pointer" src={orange} alt="orange image"/>
                                <img className="w-[38px] h-[38px] cursor-pointer" src={yellow} alt="yellow image"/>
                                <img className="w-[38px] h-[38px] cursor-pointer" src={black} alt="black image"/>
                                <img className="w-[38px] h-[38px] cursor-pointer" src={red} alt="red image"/>
                                <img className="w-[38px] h-[38px] cursor-pointer" src={green} alt="green image"/>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-base font-bold">Select Size</h4>
                            <div className="flex gap-1">
                                <p className="w-[38px] h-[38px] cursor-pointer border border-gray-500 bg-[#fbe6dd] flex items-center justify-center font-bold rounded-full">
                                    32
                                </p>
                                <p className="w-[38px] h-[38px] cursor-pointer border border-gray-500 bg-[#fbe6dd] flex items-center justify-center font-bold rounded-full">
                                    35
                                </p>
                                <p className="w-[38px] h-[38px] cursor-pointer border border-gray-500 bg-[#fbe6dd] flex items-center justify-center font-bold rounded-full">
                                    38
                                </p>
                                <p className="w-[38px] h-[38px] cursor-pointer border border-gray-500 bg-[#fbe6dd] flex items-center justify-center font-bold rounded-full">
                                    39
                                </p>
                                <p className="w-[38px] h-[38px] cursor-pointer border border-gray-500 bg-[#fbe6dd] flex items-center justify-center font-bold rounded-full">
                                    40
                                </p>
                                <p className="w-[38px] h-[38px] cursor-pointer border border-gray-500 bg-[#fbe6dd] flex items-center justify-center font-bold rounded-full">
                                    42
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="font-bold text-base">Qty</span>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">1</SelectItem>
                                    <SelectItem value="dark">2</SelectItem>
                                    <SelectItem value="system">3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex items-center gap-5">
                            <Button className="bg-black hover:bg-black font-bold">Add to Cart</Button>
                            <Button className="bg-[#ff6b2d] hover:bg-[#ff6b2d] font-bold">Buy Now</Button>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div>
                                <h4 className="text-base font-bold">Description</h4>
                                <p>
                                    Classic design with a transparent air bubble that provides cushioning and impact
                                    protection. Popular known for their comfort, durability, and distinctive style,
                                    often
                                    incorporating bold colors and innovative materials.
                                </p>
                            </div>

                            <div className="flex gap-20">
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-base font-bold">Specifications</h4>
                                    <div>
                                        <p className="text-sm"><span className="font-bold">Model:</span> AM072</p>
                                        <p className="text-sm"><span className="font-bold">Weight:</span> 0.8 Kg</p>
                                        <p className="text-sm"><span className="font-bold">Material:</span> Canvas</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h4 className="text-base font-bold">Features</h4>
                                    <div>
                                        <p className="text-sm">Style: Leisure</p>
                                        <p className="text-sm">Upper material: Canvas</p>
                                        <p className="text-sm">Sole material: Rubber</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProductDesc;
