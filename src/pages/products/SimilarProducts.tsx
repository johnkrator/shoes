import Container from "@/Container.tsx";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import yellow from "@/assets/product-details/pngwing.com (28) 1.png";
import purple from "@/assets/product-details/pngwing.com (34) 1.png";
import red from "@/assets/product-details/pngwing.com (31) 1.png";
import green from "@/assets/product-details/pngwing.com (24) 1.png";
import LazyImage from "@/components/LazyImage.tsx";

const SimilarProducts = () => {
    return (
        <Container>
            <div className="flex flex-col gap-3">
                <h1 className="text-[40px] md:leading-0 leading-10">
                    Similar <span className="text-[#f46e18]">Products</span> you might like
                </h1>
                <div className="my-5">
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                                <div>
                                    <LazyImage
                                        className="shadow-xl p-10 rounded-xl lg:w-[272px] h-[258px] bg-[#f46e18] object-cover border"
                                        src={yellow}
                                        alt=""
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                                <div>
                                    <LazyImage
                                        className="shadow-xl p-10 rounded-xl lg:w-[272px] h-[258px] bg-[#fff] object-cover border"
                                        src={purple}
                                        alt=""
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                                <div>
                                    <LazyImage
                                        className="shadow-xl p-10 rounded-xl lg:w-[272px] h-[258px] bg-[#150702] object-cover border"
                                        src={red}
                                        alt=""
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                                <div>
                                    <LazyImage
                                        className="shadow-xl p-10 rounded-xl lg:w-[272px] h-[258px] bg-[#fceee8] object-cover border"
                                        src={green}
                                        alt=""
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                                <div>
                                    <LazyImage
                                        className="shadow-xl p-10 rounded-xl lg:w-[272px] h-[258px] bg-[#f46e18] object-cover border"
                                        src={purple}
                                        alt=""
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                                <div>
                                    <LazyImage
                                        className="shadow-xl p-10 rounded-xl lg:w-[272px] h-[258px] bg-[#150702] object-cover border"
                                        src={red}
                                        alt=""
                                    />
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </Container>
    );
};

export default SimilarProducts;
