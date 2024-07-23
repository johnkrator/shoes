import {useSelector} from "react-redux";
import Container from "@/Container.tsx";
import {selectFavoriteProduct} from "@/redux/features/favoriteSlice.ts";
import ProductCard from "@/components/products/ProductCard.tsx";

const Favorites = () => {
    const favorites = useSelector(selectFavoriteProduct) as Product[];

    return (
        <div className="my-10">
            <Container>
                {favorites.length > 0 ? (
                    <div className="flex flex-col gap-5">
                        <h1 className="text-base font-bold">Your Favorites</h1>
                        <ProductCard products={favorites}/>
                    </div>
                ) : (
                    <p>You haven't added any favorites yet.</p>
                )}
            </Container>
        </div>
    );
};

export default Favorites;
