import HeroSection from "@/components/HeroSection.tsx";
import AboutComponent from "@/components/AboutComponent.tsx";
import ProductDetailsComponent from "@/components/ProductDetailsComponent.tsx";
import CustomersReview from "@/components/CustomersReview.tsx";
import Products from "@/components/products/Products.tsx";
import RevelOnScroll from "@/components/RevelOnScroll.tsx";

const Home = () => {
    return (
        <div className="flex flex-col justify-center overflow-x-hidden">
            <RevelOnScroll>
                <HeroSection/>
            </RevelOnScroll>
            <RevelOnScroll>
                <Products/>
            </RevelOnScroll>
            <RevelOnScroll>
                <AboutComponent/>
            </RevelOnScroll>
            <RevelOnScroll>
                <ProductDetailsComponent/>
            </RevelOnScroll>
            <RevelOnScroll>
                <CustomersReview/>
            </RevelOnScroll>
        </div>
    );
};

export default Home;
