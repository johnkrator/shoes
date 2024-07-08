import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Container from "@/Container.tsx";
import {selectFavoriteProduct, setFavorites} from "@/redux/features/favoriteSlice.ts";
import ProductCard from "@/components/products/ProductCard.tsx";

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavoriteProduct);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            dispatch(setFavorites(JSON.parse(storedFavorites)));
        }
    }, [dispatch]);

    return (
        <div className="mt-10">
            <Container>
                {favorites.length > 0 ? (
                    <div className="flex flex-col gap-5">
                        <h1 className="text-base font-bold">Your Favorites</h1>
                        <ProductCard/>
                    </div>
                ) : (
                    <p>You haven't added any favorites yet.</p>
                )}
            </Container>
        </div>
    );
};

export default Favorites;
