import lady from "@/assets/Ellipse 2310 (1).png";
import man from "@/assets/Ellipse 2310.png";
import {IoStar} from "react-icons/io5";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel.tsx";


const ReviewsCarousel = () => {
    return (
        <div className="">
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="flex flex-col  justify-center gap-3 bg-white rounded-xl p-5 w-full h-[250px]">
                            <div className="flex gap-3 items-center">
                                <img src={lady} className="object-cover rounded-full w-[80px] h-[80px]" alt=""/>
                                <div>
                                    <p className="font-bold whitespace-nowrap text-sm">Elsbeth Blu</p>
                                    <div className="flex items-center">
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="font-bold text-xs">
                                    I love my Nike Air Max! The comfort and support are unmatched, and the stylish
                                    design always gets compliments. Perfect for both my workouts and daily wear!
                                </p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="flex flex-col justify-center  gap-3 bg-white rounded-xl p-5 w-full h-[250px]">
                            <div className="flex gap-3 items-center">
                                <img src={man} className="object-cover rounded-full w-[80px] h-[80px]" alt=""/>
                                <div>
                                    <p className="font-bold whitespace-nowrap text-sm">Phill K</p>
                                    <div className="flex items-center">
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#d3d6d9]"/>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="font-bold text-xs">
                                    The Nike Air Max exceeded my expectations with its incredible cushioning and sleek
                                    look. These shoes are perfect for long runs and casual outings alike
                                </p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="flex flex-col  justify-center gap-3 bg-white rounded-xl p-5 w-full h-[250px]">
                            <div className="flex gap-3 items-center">
                                <img src={lady} className="object-cover rounded-full w-[80px] h-[80px]" alt=""/>
                                <div>
                                    <p className="font-bold whitespace-nowrap text-sm">Elsbeth Blu</p>
                                    <div className="flex items-center">
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="font-bold text-xs">
                                    I love my Nike Air Max! The comfort and support are unmatched, and the stylish
                                    design always gets compliments. Perfect for both my workouts and daily wear!
                                </p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="flex flex-col justify-center  gap-3 bg-white rounded-xl p-5 w-full h-[250px]">
                            <div className="flex gap-3 items-center">
                                <img src={man} className="object-cover rounded-full w-[80px] h-[80px]" alt=""/>
                                <div>
                                    <p className="font-bold whitespace-nowrap text-sm">Phill K</p>
                                    <div className="flex items-center">
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#f67018]"/>
                                        <IoStar className="text-[#d3d6d9]"/>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="font-bold text-xs">
                                    The Nike Air Max exceeded my expectations with its incredible cushioning and sleek
                                    look. These shoes are perfect for long runs and casual outings alike
                                </p>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default ReviewsCarousel;
