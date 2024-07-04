import Container from "@/Container.tsx";
import {MdOutlineStar} from "react-icons/md";

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
                                <p className="text-sm">
                                    Amazing and very comfortable.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[40vw]">b</div>
                </div>
            </Container>
        </div>
    );
};

export default ProductReview;
