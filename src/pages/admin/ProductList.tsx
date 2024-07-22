import Container from "@/Container.tsx";
import SmallNav from "@/pages/products/SmallNav.tsx";

const ProductList = () => {
    return (
        <div>
            <SmallNav/>
            <Container>
                <div className="my-10">
                    ProductList
                </div>
            </Container>
        </div>
    );
};

export default ProductList;
