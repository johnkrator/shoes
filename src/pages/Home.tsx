import HeroSection from "@/components/HeroSection.tsx";
import AboutComponent from "@/components/AboutComponent.tsx";
import ProductDetailsComponent from "@/components/ProductDetailsComponent.tsx";
import CustomersReview from "@/components/CustomersReview.tsx";
import Products from "@/components/products/Products.tsx";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Products/>
            <AboutComponent/>
            <ProductDetailsComponent/>
            <CustomersReview/>
        </div>
    );
};

export default Home;
