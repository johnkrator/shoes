import {useState} from "react";
import {CiHeart} from "react-icons/ci";
import {IoIosArrowRoundForward} from "react-icons/io";
import {Link} from "react-router-dom";
import {productData} from "@/components/products/productData.ts";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";
import LazyImage from "@/components/LazyImage.tsx";

const ProductCard = () => {
    const itemsPerPage = 5; // Adjust this value as needed
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(productData.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {currentItems.map((product) => (
                    <Link to={`/product/${product.id}`}>
                        <div key={product.id} className="bg-[#ffe4cc] shadow rounded-xl px-5 py-3">
                            <div className="overflow-hidden w-full relative group rounded-lg">
                                <LazyImage src={product.image}
                                           className="w-[210px] h-[160px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                                           alt=""/>
                            </div>

                            <div className="flex flex-col gap-2 pt-2">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-bold">{product.name}</h2>
                                    <Link to="">
                                        <CiHeart className="bg-[#ffd4b7] text-[#ff8855] rounded-full font-bold"
                                                 size={25}/>
                                    </Link>
                                </div>

                                <h2 className="font-bold">$ {product.price}</h2>

                                <div className="flex justify-between items-center">
                                    <h2 className="font-bold">View details</h2>
                                    <IoIosArrowRoundForward className="" size={25}/>
                                </div>
                            </div>
                        </div>
                    </Link>
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
