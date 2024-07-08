import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {MdOutlineStar} from "react-icons/md";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Button} from "@/components/ui/button.tsx";
import Container from "@/Container.tsx";
import LazyImage from "@/components/LazyImage.tsx";
import {useCreateReviewMutation, useGetProductDetailsQuery} from "@/redux/api/productApiSlice.ts";
import {addToCart} from "@/redux/features/cartSlice.ts";

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    discount_price?: number;
    images: string[];
    colors: string[];
    sizes: string[];
}

const ProductDesc: React.FC = () => {
    const {id: productId} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const {data, isLoading, refetch, error} = useGetProductDetailsQuery(productId);
    const [createReview, {isLoading: loadingProductReview}] = useCreateReviewMutation();

    const {userInfo} = useSelector((state: any) => state.auth);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createReview({productId, rating, comment}).unwrap();
            toast.success("Review submitted successfully", {
                position: "top-center",
                autoClose: 2000,
            });
            refetch();
        } catch (error: any) {
            toast.error(error.data?.message || "Something went wrong", {
                position: "top-center",
                autoClose: 2000,
            });
        }
    };

    const handleAddToCart = () => {
        if (data?.Product) {
            dispatch(addToCart({...data.Product, qty}));
            navigate("/cart");
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {JSON.stringify(error)}</div>;
    if (!data?.Product) return <div>No product data available</div>;

    const product: Product = data.Product;

    return (
        <Container>
            <div className="flex lg:flex-row flex-col gap-5 pt-3">
                {/* Product images */}
                <div className="lg:w-[55vw] flex flex-col gap-3">
                    {product.images.length > 0 && (
                        <div className="overflow-hidden w-full relative group rounded-lg">
                            <LazyImage
                                src={product.images[0]}
                                className="bg-[#fae5dd] md:w-[781px] md:h-[420px] py-5 rounded-xl object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                                alt={`Image of ${product.name}`}
                            />
                        </div>
                    )}
                    {product.images.length > 1 && (
                        <div className="flex items-center gap-3">
                            {product.images.slice(1, 3).map((image: string, index: number) => (
                                <div key={index} className="overflow-hidden w-full relative group rounded-lg">
                                    <LazyImage
                                        src={image}
                                        className="bg-[#fae5dd] md:w-[382px] md:h-[258px] py-5 rounded-xl object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                                        alt={`Image of ${product.name}`}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product details */}
                <div className="lg:w-[40vw]">
                    <h1 className="text-[40px] font-bold text-[#e0551b] leading-10 mb-3">{product.name}</h1>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <p className="text-sm font-bold">{product.description}</p>
                            <div className="flex items-center gap-5">
                                <span className="font-bold">$ {product.discount_price || product.price}</span>
                                {product.discount_price && (
                                    <>
                                        <span className="line-through text-xs">$ {product.price}</span>
                                        <span className="text-[#e0551b] text-xs">
                                            -{Math.round((1 - product.discount_price / product.price) * 100)}%
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Rating placeholder */}
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <MdOutlineStar key={i} className="text-[#e0551b]"/>
                                ))}
                            </div>
                            <span className="text-xs font-bold">(0 Reviews)</span>
                        </div>

                        {/* Colors */}
                        <div className="flex flex-col gap-1">
                            <h4 className="text-base font-bold">Select Color</h4>
                            <div className="flex gap-1">
                                {product.colors.map((color: string, index: number) => (
                                    <div
                                        key={index}
                                        className="w-[38px] h-[38px] cursor-pointer rounded-full"
                                        style={{backgroundColor: color}}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Sizes */}
                        <div>
                            <h4 className="text-base font-bold">Select Size</h4>
                            <div className="flex gap-1">
                                {product.sizes.map((size: string, index: number) => (
                                    <p key={index}
                                       className="w-[38px] h-[38px] cursor-pointer border border-gray-500 bg-[#fbe6dd] flex items-center justify-center font-bold rounded-full">
                                        {size}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Quantity selector */}
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-base">Qty</span>
                            <Select onValueChange={(value) => setQty(Number(value))}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-5">
                            <Button className="bg-black hover:bg-black font-bold" onClick={handleAddToCart}>Add to
                                Cart</Button>
                            <Button className="bg-[#ff6b2d] hover:bg-[#ff6b2d] font-bold">Buy Now</Button>
                        </div>

                        {/* Description and specifications */}
                        <div className="flex flex-col gap-5">
                            <div>
                                <h4 className="text-base font-bold">Description</h4>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review form */}
            {userInfo && (
                <form onSubmit={handleSubmit} className="mt-5">
                    <h2 className="text-xl font-bold mb-2">Write a Customer Review</h2>
                    <div className="mb-2">
                        <label htmlFor="rating" className="block mb-1">Rating</label>
                        <select
                            id="rating"
                            value={rating}
                            onChange={(e) => setRating(Number(e.target.value))}
                            className="w-full p-2 border rounded"
                        >
                            <option value="">Select...</option>
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="comment" className="block mb-1">Comment</label>
                        <textarea
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full p-2 border rounded"
                            rows={3}
                        ></textarea>
                    </div>
                    <Button type="submit" disabled={loadingProductReview}>
                        Submit
                    </Button>
                </form>
            )}
        </Container>
    );
};

export default ProductDesc;
