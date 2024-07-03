import React, {useState, useEffect} from "react";
import {useLocation, Link} from "react-router-dom";
import {productData} from "@/components/products/productData.ts";
import Container from "@/Container.tsx";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const SearchResults: React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("q") || "";

    const [results, setResults] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const searchProducts = () => {
            setIsLoading(true);
            setError(null);

            try {
                const filteredProducts = productData.filter((product) =>
                    product.name.toLowerCase().includes(query.toLowerCase()) ||
                    product.price.toString().includes(query) ||
                    // Add more fields to search through as needed
                    product.description?.toLowerCase().includes(query.toLowerCase())
                );
                setResults(filteredProducts);
            } catch (err) {
                setError("An error occurred while searching for products.");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        if (query) {
            searchProducts();
        }
    }, [query]);

    return (
        <Container>
            <div className="mx-auto py-10">
                <h1 className="text-3xl font-bold mb-4">Search Results for: {query}</h1>

                {isLoading && <p className="text-gray-600">Loading results...</p>}

                {error && <p className="text-red-500">{error}</p>}

                {!isLoading && !error && results.length === 0 && (
                    <p className="text-gray-600">No results found for "{query}"</p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {results.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <div className="bg-[#ffe4cc] shadow rounded-xl px-5 py-3">
                                <div className="overflow-hidden w-full relative group rounded-lg">
                                    <img src={product.image}
                                         className="w-[210px] h-[160px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                                         alt=""/>
                                </div>
                                <div className="flex flex-col gap-2 pt-2">
                                    <h2 className="font-bold">{product.name}</h2>
                                    <h2 className="font-bold">$ {product.price}</h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default SearchResults;
