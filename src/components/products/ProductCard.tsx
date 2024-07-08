import {useEffect, useState} from "react";
import {CiHeart} from "react-icons/ci";
import {FaHeart} from "react-icons/fa";
import {IoIosArrowRoundForward} from "react-icons/io";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {productData} from "@/components/products/productData.ts";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";
import LazyImage from "@/components/LazyImage.tsx";
import {
    addToFavorites,
    removeFromFavorites,
    selectFavoriteProduct,
    setFavorites
} from "@/redux/features/favoriteSlice.ts";

// Define the Product type
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

const ProductCard = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavoriteProduct);
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(productData.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Load favorites from localStorage when the component mounts
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            dispatch(setFavorites(JSON.parse(storedFavorites)));
        }
    }, [dispatch]);

    const toggleFavorite = (product: Product) => {
        if (favorites.some(fav => fav._id === product.id.toString())) {
            dispatch(removeFromFavorites({_id: product.id.toString()}));
        } else {
            dispatch(addToFavorites({_id: product.id.toString(), ...product}));
        }
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentItems.map((product: Product) => (
                    <div key={product.id} className="bg-[#ffe4cc] shadow rounded-xl px-5 py-3">
                        <Link to={`/product/${product.id}`}>
                            <div className="overflow-hidden w-full relative group rounded-lg">
                                <LazyImage
                                    src={product.image}
                                    className="w-[210px] h-[160px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                                    alt={`Image of ${product.name}`}
                                />
                            </div>
                        </Link>

                        <div className="flex flex-col gap-2 pt-2">
                            <div className="flex justify-between items-center">
                                <h2 className="font-bold">{product.name}</h2>
                                <button onClick={() => toggleFavorite(product)}>
                                    {favorites.some(fav => fav._id === product.id.toString()) ? (
                                        <FaHeart className="text-red-500" size={25}/>
                                    ) : (
                                        <CiHeart
                                            className="bg-[#ffd4b7] text-[#ff8855] rounded-full font-bold"
                                            size={25}
                                        />
                                    )}
                                </button>
                            </div>

                            <h2 className="font-bold">$ {product.price}</h2>

                            <div className="flex justify-between items-center">
                                <h2 className="font-bold">View details</h2>
                                <IoIosArrowRoundForward className="" size={25}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/*pagination*/}
            <Pagination className="my-2">
                <PaginationContent>
                    <PaginationItem>
                        {currentPage > 1 ? (
                            <PaginationPrevious
                                href="#"
                                onClick={() => handlePageChange(currentPage - 1)} size={undefined}/>
                        ) : (
                            <PaginationPrevious href="#" className="pointer-events-none opacity-50 mr-3"
                                                size={undefined}/>
                        )}
                    </PaginationItem>
                    {[...Array(totalPages)].map((_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink
                                href="#"
                                onClick={() => handlePageChange(index + 1)}
                                isActive={currentPage === index + 1} size={undefined}>
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        {currentPage < totalPages ? (
                            <PaginationNext
                                href="#"
                                onClick={() => handlePageChange(currentPage + 1)} size={undefined}/>
                        ) : (
                            <PaginationNext href="#" className="pointer-events-none opacity-50 ml-1" size={undefined}/>
                        )}
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default ProductCard;
