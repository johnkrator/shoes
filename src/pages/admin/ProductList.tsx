import Container from "@/Container.tsx";
import SmallNav from "@/pages/products/SmallNav.tsx";
import LazyImage from "@/components/LazyImage.tsx";
import YellowSneaker from "@/assets/product-details/pngwing.com (28) 1.png";
import {FaPlus} from "react-icons/fa";

const ProductList = () => {
    return (
        <div>
            <SmallNav/>
            <Container>
                <div className="my-10">
                    <h1 className="text-4xl font-bold">Hot picks for you!</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5">
                        {[...Array(6)].map((_, index) => (
                            <div
                                key={index}
                                className="relative flex items-center justify-center rounded-xl shadow-lg bg-[#FCEEE8] w-full h-[357.23px] max-w-[450px] mx-auto"
                            >
                                <LazyImage
                                    src={YellowSneaker}
                                    alt="sneaker"
                                    className="object-cover w-[335.08px] h-[216px]"
                                />
                                <div
                                    className="absolute lg:bottom-5 bottom-5 p-1 right-5 cursor-pointer bg-[#E0551B] text-white font-bold rounded-full">
                                    <FaPlus size={35}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProductList;
