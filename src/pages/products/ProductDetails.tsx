import SmallNav from "@/pages/products/SmallNav.tsx";
import ProductDesc from "@/pages/products/ProductDesc.tsx";
import ProductReview from "@/pages/products/ProductReview.tsx";
import SimilarProducts from "@/pages/products/SimilarProducts.tsx";
import RevelOnScroll from "@/components/RevelOnScroll.tsx";

const ProductDetails = () => {
    return (
        <div>
            <div>
                <SmallNav/>
                <div className="flex flex-col gap-10">
                    <RevelOnScroll>
                        <ProductDesc/>
                    </RevelOnScroll>
                    <RevelOnScroll>
                        <ProductReview/>
                    </RevelOnScroll>
                    <RevelOnScroll>
                        <SimilarProducts/>
                    </RevelOnScroll>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
