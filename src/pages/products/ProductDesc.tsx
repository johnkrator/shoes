import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Button} from "@/components/ui/button.tsx";
import Container from "@/Container.tsx";
import LazyImage from "@/components/LazyImage.tsx";
import {useGetProductDetailsQuery} from "@/redux/api/productApiSlice.ts";
import {addToCart} from "@/redux/features/cartSlice.ts";
import {SkeletonDemo} from "@/components/Loader.tsx";
import {useCartMutation} from "@/redux/api/cartApiSlice.ts";

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

interface ApiError {
    status?: number;
    data?: {
        message?: string;
    };
}

const ProductDesc: React.FC = () => {
    const {id: productId} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState<string>("");
    const [selectedSize, setSelectedSize] = useState<string>("");

    const {data, isLoading, error} = useGetProductDetailsQuery(productId);
    const [addToCartMutation] = useCartMutation();

    const handleAddToCart = async () => {
        if (data?.Product && selectedSize) {
            try {
                const cartItem = {
                    productId: data.Product._id,
                    quantity: quantity,
                    size: selectedSize,
                    color: selectedColor || "No color selected"
                };
                await addToCartMutation(cartItem).unwrap();

                dispatch(addToCart({
                    ...data.Product,
                    quantity,
                    size: selectedSize,
                    color: selectedColor || "No color selected"
                }));

                toast.success("Item added to cart successfully", {
                    position: "top-center",
                    autoClose: 2000,
                });

                navigate("/cart");
            } catch (error) {
                toast.error("Failed to add item to cart", {
                    position: "top-center",
                    autoClose: 2000,
                });
            }
        } else {
            toast.error("Please select size before adding to cart", {
                position: "top-center",
                autoClose: 2000,
            });
        }
    };

    if (isLoading) return <SkeletonDemo/>;
    if (error) {
        let errorMessage = "An error occurred";
        if (typeof error === "object" && error !== null) {
            const apiError = error as ApiError;
            if (apiError.status) {
                errorMessage = `Error ${apiError.status}: ${apiError.data?.message || "Unknown error"}`;
            }
        }
        return <div>Error: {errorMessage}</div>;
    }
    if (!data?.Product) return <div>No product data available</div>;

    const product: Product = data.Product;

    return (
        <Container>
            <div className="flex flex-col lg:flex-row gap-5 pt-3">
                {/* Product images */}
                <div className="w-full lg:w-[55%] flex flex-col gap-3">
                    {product.images.length > 0 && (
                        <div className="overflow-hidden w-full relative group rounded-lg">
                            <LazyImage
                                src={product.images[0]}
                                className="bg-[#fae5dd] w-full h-[300px] md:h-[420px] p-5 rounded-xl object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
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
                                        className="bg-[#fae5dd] w-full h-[150px] md:h-[258px] p-5 rounded-xl object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                                        alt={`Image of ${product.name}`}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product details */}
                <div className="w-full lg:w-[45%]">
                    <h1 className="text-3xl md:text-[40px] font-bold text-[#e0551b] leading-tight mb-3">{product.name}</h1>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <p className="text-sm font-bold">{product.description}</p>
                            <div className="flex items-center gap-5 mt-2">
                                <span className="font-bold text-lg">$ {product.discount_price || product.price}</span>
                                {product.discount_price && (
                                    <>
                                        <span className="line-through text-sm">$ {product.price}</span>
                                        <span className="text-[#e0551b] text-sm">
                                            -{Math.round((1 - product.discount_price / product.price) * 100)}%
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Colors */}
                        <div className="flex flex-col gap-1 mt-4">
                            <h4 className="text-base font-bold">Select Color</h4>
                            <div className="flex flex-wrap gap-2">
                                {product.colors.map((color: string, index: number) => (
                                    <div
                                        key={index}
                                        className={`w-[38px] h-[38px] cursor-pointer rounded-full ${
                                            selectedColor === color ? "border-2 border-black" : ""
                                        }`}
                                        style={{backgroundColor: color}}
                                        onClick={() => setSelectedColor(color)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Sizes */}
                        <div className="mt-4">
                            <h4 className="text-base font-bold">Select Size</h4>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {product.sizes.map((size: string, index: number) => (
                                    <p
                                        key={index}
                                        className={`w-[38px] h-[38px] cursor-pointer border ${
                                            selectedSize === size ? "border-black bg-black text-white" : "border-gray-500 bg-[#fbe6dd]"
                                        } flex items-center justify-center font-bold rounded-full`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Quantity selector */}
                        <div className="flex items-center gap-3 mt-4">
                            <span className="font-bold text-base">Quantity</span>
                            <Select onValueChange={(value) => setQuantity(Number(value))}>
                                <SelectTrigger className="w-[120px]">
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
                        <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
                            <Button className="bg-black hover:bg-black font-bold w-full sm:w-auto"
                                    onClick={handleAddToCart}>
                                Add to Cart
                            </Button>
                            <Button className="bg-[#ff6b2d] hover:bg-[#ff6b2d] font-bold w-full sm:w-auto">Buy
                                Now</Button>
                        </div>

                        {/* Description and specifications */}
                        <div className="flex flex-col gap-5 mt-8">
                            <div>
                                <h4 className="text-base font-bold mb-2">Description</h4>
                                <p className="text-sm">{product.description}</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 mt-6">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-base font-bold">Specifications</h4>
                                <div>
                                    <p className="text-sm"><span className="font-bold">Model:</span> AM072</p>
                                    <p className="text-sm"><span className="font-bold">Weight:</span> 0.8 Kg</p>
                                    <p className="text-sm"><span className="font-bold">Material:</span> Canvas</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h4 className="text-base font-bold">Features</h4>
                                <div>
                                    <p className="text-sm">Style: Leisure</p>
                                    <p className="text-sm">Upper material: Canvas</p>
                                    <p className="text-sm">Sole material: Rubber</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProductDesc;

// import React, {useState} from "react";
// import {useNavigate, useParams} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {toast} from "react-toastify";
// import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
// import {Button} from "@/components/ui/button.tsx";
// import Container from "@/Container.tsx";
// import LazyImage from "@/components/LazyImage.tsx";
// import {useGetProductDetailsQuery} from "@/redux/api/productApiSlice.ts";
// import {addToCart} from "@/redux/features/cartApiSlice.ts";
// import {SkeletonDemo} from "@/components/Loader.tsx";
// import {useCartMutation} from "@/redux/api/cartApiSlice.ts";
//
// interface Product {
//     _id: string;
//     name: string;
//     description: string;
//     price: number;
//     discount_price?: number;
//     images: string[];
//     colors: string[];
//     sizes: string[];
// }
//
// interface ApiError {
//     status?: number;
//     data?: {
//         message?: string;
//     };
// }
//
// const ProductDesc: React.FC = () => {
//     const {id: productId} = useParams<{ id: string }>();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//
//     const [quantity, setQuantity] = useState(1);
//     const [selectedColor, setSelectedColor] = useState<string | null>(null);
//     const [selectedSize, setSelectedSize] = useState<string | null>(null);
//
//     const {data, isLoading, error} = useGetProductDetailsQuery(productId);
//     const [addToCartMutation] = useCartMutation();
//
//     const handleAddToCart = async () => {
//         if (data?.Product && selectedSize) {
//             try {
//                 const cartItem = {
//                     productId: data.Product._id,
//                     quantity: quantity,
//                     size: selectedSize,
//                     color: selectedColor
//                 };
//                 await addToCartMutation(cartItem).unwrap();
//
//                 dispatch(addToCart({...data.Product, quantity, size: selectedSize}));
//
//                 toast.success("Item added to cart successfully", {
//                     position: "top-center",
//                     autoClose: 2000,
//                 });
//
//                 navigate("/cart");
//             } catch (error) {
//                 toast.error("Failed to add item to cart", {
//                     position: "top-center",
//                     autoClose: 2000,
//                 });
//             }
//         } else {
//             toast.error("Please select size before adding to cart", {
//                 position: "top-center",
//                 autoClose: 2000,
//             });
//         }
//     };
//
//     if (isLoading) return <SkeletonDemo/>;
//     if (error) {
//         let errorMessage = "An error occurred";
//         if (typeof error === "object" && error !== null) {
//             const apiError = error as ApiError;
//             if (apiError.status) {
//                 errorMessage = `Error ${apiError.status}: ${apiError.data?.message || "Unknown error"}`;
//             }
//         }
//         return <div>Error: {errorMessage}</div>;
//     }
//     if (!data?.Product) return <div>No product data available</div>;
//
//     const product: Product = data.Product;
//
//     return (
//         <Container>
//             <div className="flex flex-col lg:flex-row gap-5 pt-3">
//                 {/* Product images */}
//                 <div className="w-full lg:w-[55%] flex flex-col gap-3">
//                     {product.images.length > 0 && (
//                         <div className="overflow-hidden w-full relative group rounded-lg">
//                             <LazyImage
//                                 src={product.images[0]}
//                                 className="bg-[#fae5dd] w-full h-[300px] md:h-[420px] p-5 rounded-xl object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
//                                 alt={`Image of ${product.name}`}
//                             />
//                         </div>
//                     )}
//                     {product.images.length > 1 && (
//                         <div className="flex items-center gap-3">
//                             {product.images.slice(1, 3).map((image: string, index: number) => (
//                                 <div key={index} className="overflow-hidden w-full relative group rounded-lg">
//                                     <LazyImage
//                                         src={image}
//                                         className="bg-[#fae5dd] w-full h-[150px] md:h-[258px] p-5 rounded-xl object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
//                                         alt={`Image of ${product.name}`}
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//
//                 {/* Product details */}
//                 <div className="w-full lg:w-[45%]">
//                     <h1 className="text-3xl md:text-[40px] font-bold text-[#e0551b] leading-tight mb-3">{product.name}</h1>
//                     <div className="flex flex-col gap-3">
//                         <div className="flex flex-col">
//                             <p className="text-sm font-bold">{product.description}</p>
//                             <div className="flex items-center gap-5 mt-2">
//                                 <span className="font-bold text-lg">$ {product.discount_price || product.price}</span>
//                                 {product.discount_price && (
//                                     <>
//                                         <span className="line-through text-sm">$ {product.price}</span>
//                                         <span className="text-[#e0551b] text-sm">
//                                             -{Math.round((1 - product.discount_price / product.price) * 100)}%
//                                         </span>
//                                     </>
//                                 )}
//                             </div>
//                         </div>
//
//                         {/* Colors */}
//                         <div className="flex flex-col gap-1 mt-4">
//                             <h4 className="text-base font-bold">Select Color</h4>
//                             <div className="flex flex-wrap gap-2">
//                                 {product.colors.map((color: string, index: number) => (
//                                     <div
//                                         key={index}
//                                         className={`w-[38px] h-[38px] cursor-pointer rounded-full ${
//                                             selectedColor === color ? "border-2 border-black" : ""
//                                         }`}
//                                         style={{backgroundColor: color}}
//                                         onClick={() => setSelectedColor(color)}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//
//                         {/* Sizes */}
//                         <div className="mt-4">
//                             <h4 className="text-base font-bold">Select Size</h4>
//                             <div className="flex flex-wrap gap-2 mt-1">
//                                 {product.sizes.map((size: string, index: number) => (
//                                     <p
//                                         key={index}
//                                         className={`w-[38px] h-[38px] cursor-pointer border ${
//                                             selectedSize === size ? "border-black bg-black text-white" : "border-gray-500 bg-[#fbe6dd]"
//                                         } flex items-center justify-center font-bold rounded-full`}
//                                         onClick={() => setSelectedSize(size)}
//                                     >
//                                         {size}
//                                     </p>
//                                 ))}
//                             </div>
//                         </div>
//
//                         {/* Quantity selector */}
//                         <div className="flex items-center gap-3 mt-4">
//                             <span className="font-bold text-base">Quantity</span>
//                             <Select onValueChange={(value) => setQuantity(Number(value))}>
//                                 <SelectTrigger className="w-[120px]">
//                                     <SelectValue placeholder="Select"/>
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     {[1, 2, 3, 4, 5].map((num) => (
//                                         <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
//                                     ))}
//                                 </SelectContent>
//                             </Select>
//                         </div>
//
//                         {/* Action buttons */}
//                         <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
//                             <Button className="bg-black hover:bg-black font-bold w-full sm:w-auto"
//                                     onClick={handleAddToCart}>
//                                 Add to Cart
//                             </Button>
//                             <Button className="bg-[#ff6b2d] hover:bg-[#ff6b2d] font-bold w-full sm:w-auto">Buy
//                                 Now</Button>
//                         </div>
//
//                         {/* Description and specifications */}
//                         <div className="flex flex-col gap-5 mt-8">
//                             <div>
//                                 <h4 className="text-base font-bold mb-2">Description</h4>
//                                 <p className="text-sm">{product.description}</p>
//                             </div>
//                         </div>
//
//                         <div className="flex flex-col md:flex-row gap-8 mt-6">
//                             <div className="flex flex-col gap-2">
//                                 <h4 className="text-base font-bold">Specifications</h4>
//                                 <div>
//                                     <p className="text-sm"><span className="font-bold">Model:</span> AM072</p>
//                                     <p className="text-sm"><span className="font-bold">Weight:</span> 0.8 Kg</p>
//                                     <p className="text-sm"><span className="font-bold">Material:</span> Canvas</p>
//                                 </div>
//                             </div>
//
//                             <div className="flex flex-col gap-2">
//                                 <h4 className="text-base font-bold">Features</h4>
//                                 <div>
//                                     <p className="text-sm">Style: Leisure</p>
//                                     <p className="text-sm">Upper material: Canvas</p>
//                                     <p className="text-sm">Sole material: Rubber</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Container>
//     );
// };
//
// export default ProductDesc;


// import React, {useState} from "react";
// import {useNavigate, useParams} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {toast} from "react-toastify";
// import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
// import {Button} from "@/components/ui/button.tsx";
// import Container from "@/Container.tsx";
// import LazyImage from "@/components/LazyImage.tsx";
// import {useGetProductDetailsQuery} from "@/redux/api/productApiSlice.ts";
// import {addToCart} from "@/redux/features/cartApiSlice.ts";
// import {SkeletonDemo} from "@/components/Loader.tsx";
// import {useCartMutation} from "@/redux/api/cartApiSlice.ts";
//
// interface Product {
//     _id: string;
//     name: string;
//     description: string;
//     price: number;
//     discount_price?: number;
//     images: string[];
//     colors: string[];
//     sizes: string[];
// }
//
// interface ApiError {
//     status?: number;
//     data?: {
//         message?: string;
//     };
// }
//
// const ProductDesc: React.FC = () => {
//     const {id: productId} = useParams<{ id: string }>();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//
//     const [quantity, setQuantity] = useState(1);
//     const [selectedColor, setSelectedColor] = useState<string | null>(null);
//     const [selectedSize, setSelectedSize] = useState<string | null>(null);
//
//     const {data, isLoading, error} = useGetProductDetailsQuery(productId);
//     const [addToCartMutation] = useCartMutation();
//
//     const handleAddToCart = async () => {
//         if (data?.Product && selectedSize) {
//             try {
//                 const cartItem = {
//                     productId: data.Product._id,
//                     quantity: quantity,
//                     size: selectedSize,
//                     color: selectedColor
//                 };
//                 await addToCartMutation(cartItem).unwrap();
//
//                 dispatch(addToCart({...data.Product, quantity, size: selectedSize}));
//
//                 toast.success("Item added to cart successfully", {
//                     position: "top-center",
//                     autoClose: 2000,
//                 });
//
//                 navigate("/cart");
//             } catch (error) {
//                 toast.error("Failed to add item to cart", {
//                     position: "top-center",
//                     autoClose: 2000,
//                 });
//             }
//         } else {
//             toast.error("Please select size before adding to cart", {
//                 position: "top-center",
//                 autoClose: 2000,
//             });
//         }
//     };
//
//     if (isLoading) return <SkeletonDemo/>;
//     if (error) {
//         let errorMessage = "An error occurred";
//         if (typeof error === "object" && error !== null) {
//             const apiError = error as ApiError;
//             if (apiError.status) {
//                 errorMessage = `Error ${apiError.status}: ${apiError.data?.message || "Unknown error"}`;
//             }
//         }
//         return <div>Error: {errorMessage}</div>;
//     }
//     if (!data?.Product) return <div>No product data available</div>;
//
//     const product: Product = data.Product;
//
//     return (
//         <Container>
//             <div className="flex lg:flex-row flex-col gap-5 pt-3">
//                 {/* Product images */}
//                 <div className="lg:w-[55vw] flex flex-col gap-3">
//                     {product.images.length > 0 && (
//                         <div className="overflow-hidden w-full relative group rounded-lg">
//                             <LazyImage
//                                 src={product.images[0]}
//                                 className="bg-[#fae5dd] md:w-[781px] md:h-[420px] p-5 rounded-xl object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
//                                 alt={`Image of ${product.name}`}
//                             />
//                         </div>
//                     )}
//                     {product.images.length > 1 && (
//                         <div className="flex items-center gap-3">
//                             {product.images.slice(1, 3).map((image: string, index: number) => (
//                                 <div key={index} className="overflow-hidden w-full relative group rounded-lg">
//                                     <LazyImage
//                                         src={image}
//                                         className="bg-[#fae5dd] md:w-[382px] md:h-[258px] p-5 rounded-xl object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
//                                         alt={`Image of ${product.name}`}
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//
//                 {/* Product details */}
//                 <div className="lg:w-[40vw]">
//                     <h1 className="text-[40px] font-bold text-[#e0551b] leading-10 mb-3">{product.name}</h1>
//                     <div className="flex flex-col gap-3">
//                         <div className="flex flex-col">
//                             <p className="text-sm font-bold">{product.description}</p>
//                             <div className="flex items-center gap-5">
//                                 <span className="font-bold">$ {product.discount_price || product.price}</span>
//                                 {product.discount_price && (
//                                     <>
//                                         <span className="line-through text-xs">$ {product.price}</span>
//                                         <span className="text-[#e0551b] text-xs">
//                                             -{Math.round((1 - product.discount_price / product.price) * 100)}%
//                                         </span>
//                                     </>
//                                 )}
//                             </div>
//                         </div>
//
//                         {/* Colors */}
//                         <div className="flex flex-col gap-1">
//                             <h4 className="text-base font-bold">Select Color</h4>
//                             <div className="flex gap-1">
//                                 {product.colors.map((color: string, index: number) => (
//                                     <div
//                                         key={index}
//                                         className={`w-[38px] h-[38px] cursor-pointer rounded-full ${
//                                             selectedColor === color ? "border-2 border-black" : ""
//                                         }`}
//                                         style={{backgroundColor: color}}
//                                         onClick={() => setSelectedColor(color)}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//
//                         {/* Sizes */}
//                         <div>
//                             <h4 className="text-base font-bold">Select Size</h4>
//                             <div className="flex gap-1">
//                                 {product.sizes.map((size: string, index: number) => (
//                                     <p
//                                         key={index}
//                                         className={`w-[38px] h-[38px] cursor-pointer border ${
//                                             selectedSize === size ? "border-black bg-black text-white" : "border-gray-500 bg-[#fbe6dd]"
//                                         } flex items-center justify-center font-bold rounded-full`}
//                                         onClick={() => setSelectedSize(size)}
//                                     >
//                                         {size}
//                                     </p>
//                                 ))}
//                             </div>
//                         </div>
//
//                         {/* Quantity selector */}
//                         <div className="flex items-center gap-3">
//                             <span className="font-bold text-base">Quantity</span>
//                             <Select onValueChange={(value) => setQuantity(Number(value))}>
//                                 <SelectTrigger className="w-[180px]">
//                                     <SelectValue placeholder="Select"/>
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     {[1, 2, 3, 4, 5].map((num) => (
//                                         <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
//                                     ))}
//                                 </SelectContent>
//                             </Select>
//                         </div>
//
//                         {/* Action buttons */}
//                         <div className="flex items-center gap-5">
//                             <Button className="bg-black hover:bg-black font-bold" onClick={handleAddToCart}>
//                                 Add to Cart
//                             </Button>
//                             <Button className="bg-[#ff6b2d] hover:bg-[#ff6b2d] font-bold">Buy Now</Button>
//                         </div>
//
//                         {/* Description and specifications */}
//                         <div className="flex flex-col gap-5">
//                             <div>
//                                 <h4 className="text-base font-bold">Description</h4>
//                                 <p>{product.description}</p>
//                             </div>
//                         </div>
//
//                         <div className="flex gap-20">
//                             <div className="flex flex-col gap-2">
//                                 <h4 className="text-base font-bold">Specifications</h4>
//                                 <div>
//                                     <p className="text-sm"><span className="font-bold">Model:</span> AM072</p>
//                                     <p className="text-sm"><span className="font-bold">Weight:</span> 0.8 Kg</p>
//                                     <p className="text-sm"><span className="font-bold">Material:</span> Canvas</p>
//                                 </div>
//                             </div>
//
//                             <div className="flex flex-col gap-2">
//                                 <h4 className="text-base font-bold">Features</h4>
//                                 <div>
//                                     <p className="text-sm">Style: Leisure</p>
//                                     <p className="text-sm">Upper material: Canvas</p>
//                                     <p className="text-sm">Sole material: Rubber</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Container>
//     );
// };
//
// export default ProductDesc;

// import React, {useState} from "react";
// import {useNavigate, useParams} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
// import {toast} from "react-toastify";
// import {MdOutlineStar} from "react-icons/md";
// import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
// import {Button} from "@/components/ui/button.tsx";
// import Container from "@/Container.tsx";
// import LazyImage from "@/components/LazyImage.tsx";
// import {useCreateReviewMutation, useGetProductDetailsQuery} from "@/redux/api/productApiSlice.ts";
// import {addToCart} from "@/redux/features/cartApiSlice.ts";
// import {SkeletonDemo} from "@/components/Loader.tsx";
// import {Textarea} from "@/components/ui/textarea.tsx";
// import {useCartMutation} from "@/redux/api/cartApiSlice.ts";
//
// interface Product {
//     _id: string;
//     name: string;
//     description: string;
//     price: number;
//     discount_price?: number;
//     images: string[];
//     colors: string[];
//     sizes: string[];
// }
//
// interface ApiError {
//     status?: number;
//     data?: {
//         message?: string;
//     };
// }
//
// const ProductDesc: React.FC = () => {
//     const {id: productId} = useParams<{ id: string }>();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//
//     const [qty, setQty] = useState(1);
//     const [selectedColor, setSelectedColor] = useState<string | null>(null);
//     const [selectedSize, setSelectedSize] = useState<string | null>(null);
//     const [rating, setRating] = useState(0);
//     const [comment, setComment] = useState("");
//
//     const {data, isLoading, refetch, error} = useGetProductDetailsQuery(productId);
//     const [createReview, {isLoading: loadingProductReview}] = useCreateReviewMutation();
//     const [addToCartMutation] = useCartMutation();
//
//     const {userInfo} = useSelector((state: any) => state.auth);
//
//     const handleSubmitReview = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!productId) {
//             toast.error("Product ID is missing", {
//                 position: "top-center",
//                 autoClose: 2000,
//             });
//             return;
//         }
//         try {
//             await createReview({productId, rating, comment}).unwrap();
//             toast.success("Review submitted successfully", {
//                 position: "top-center",
//                 autoClose: 2000,
//             });
//             setRating(0);
//             setComment("");
//             refetch();
//         } catch (err: unknown) {
//             const error = err as ApiError;
//             toast.error(error.data?.message || "Something went wrong", {
//                 position: "top-center",
//                 autoClose: 2000,
//             });
//         }
//     };
//
//     const handleAddToCart = async () => {
//         if (data?.Product && selectedSize) {
//             try {
//                 const cartItem = {
//                     productId: data.Product._id,
//                     quantity: qty,
//                     size: selectedSize,
//                     color: selectedColor
//                 };
//                 await addToCartMutation(cartItem).unwrap();
//
//                 // If the API call is successful, update the local state
//                 dispatch(addToCart({...data.Product, qty, size: selectedSize}));
//
//                 toast.success("Item added to cart successfully", {
//                     position: "top-center",
//                     autoClose: 2000,
//                 });
//
//                 navigate("/cart");
//             } catch (error) {
//                 toast.error("Failed to add item to cart", {
//                     position: "top-center",
//                     autoClose: 2000,
//                 });
//             }
//         } else {
//             toast.error("Please select size before adding to cart", {
//                 position: "top-center",
//                 autoClose: 2000,
//             });
//         }
//     };
//
//     if (isLoading) return <SkeletonDemo/>;
//     if (error) {
//         let errorMessage = "An error occurred";
//         if (typeof error === "object" && error !== null) {
//             const apiError = error as ApiError;
//             if (apiError.status) {
//                 errorMessage = `Error ${apiError.status}: ${apiError.data?.message || "Unknown error"}`;
//             }
//         }
//         return <div>Error: {errorMessage}</div>;
//     }
//     if (!data?.Product) return <div>No product data available</div>;
//
//     const product: Product = data.Product;
//
//     return (
//         <Container>
//             <div className="flex lg:flex-row flex-col gap-5 pt-3">
//                 {/* Product images */}
//                 <div className="lg:w-[55vw] flex flex-col gap-3">
//                     {product.images.length > 0 && (
//                         <div className="overflow-hidden w-full relative group rounded-lg">
//                             <LazyImage
//                                 src={product.images[0]}
//                                 className="bg-[#fae5dd] md:w-[781px] md:h-[420px] p-5 rounded-xl object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
//                                 alt={`Image of ${product.name}`}
//                             />
//                         </div>
//                     )}
//                     {product.images.length > 1 && (
//                         <div className="flex items-center gap-3">
//                             {product.images.slice(1, 3).map((image: string, index: number) => (
//                                 <div key={index} className="overflow-hidden w-full relative group rounded-lg">
//                                     <LazyImage
//                                         src={image}
//                                         className="bg-[#fae5dd] md:w-[382px] md:h-[258px] p-5 rounded-xl object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
//                                         alt={`Image of ${product.name}`}
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//
//                 {/* Product details */}
//                 <div className="lg:w-[40vw]">
//                     <h1 className="text-[40px] font-bold text-[#e0551b] leading-10 mb-3">{product.name}</h1>
//                     <div className="flex flex-col gap-3">
//                         <div className="flex flex-col">
//                             <p className="text-sm font-bold">{product.description}</p>
//                             <div className="flex items-center gap-5">
//                                 <span className="font-bold">$ {product.discount_price || product.price}</span>
//                                 {product.discount_price && (
//                                     <>
//                                         <span className="line-through text-xs">$ {product.price}</span>
//                                         <span className="text-[#e0551b] text-xs">
//                                             -{Math.round((1 - product.discount_price / product.price) * 100)}%
//                                         </span>
//                                     </>
//                                 )}
//                             </div>
//                         </div>
//
//                         {/* Rating placeholder */}
//                         <div className="flex items-center gap-2">
//                             <div className="flex items-center gap-1">
//                                 {[...Array(5)].map((_, i) => (
//                                     <MdOutlineStar key={i} className="text-[#e0551b]"/>
//                                 ))}
//                             </div>
//                             <span className="text-xs font-bold">(0 Reviews)</span>
//                         </div>
//
//                         {/* Colors */}
//                         <div className="flex flex-col gap-1">
//                             <h4 className="text-base font-bold">Select Color</h4>
//                             <div className="flex gap-1">
//                                 {product.colors.map((color: string, index: number) => (
//                                     <div
//                                         key={index}
//                                         className={`w-[38px] h-[38px] cursor-pointer rounded-full ${
//                                             selectedColor === color ? "border-2 border-black" : ""
//                                         }`}
//                                         style={{backgroundColor: color}}
//                                         onClick={() => setSelectedColor(color)}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//
//                         {/* Sizes */}
//                         <div>
//                             <h4 className="text-base font-bold">Select Size</h4>
//                             <div className="flex gap-1">
//                                 {product.sizes.map((size: string, index: number) => (
//                                     <p
//                                         key={index}
//                                         className={`w-[38px] h-[38px] cursor-pointer border ${
//                                             selectedSize === size ? "border-black bg-black text-white" : "border-gray-500 bg-[#fbe6dd]"
//                                         } flex items-center justify-center font-bold rounded-full`}
//                                         onClick={() => setSelectedSize(size)}
//                                     >
//                                         {size}
//                                     </p>
//                                 ))}
//                             </div>
//                         </div>
//
//                         {/* Quantity selector */}
//                         <div className="flex items-center gap-3">
//                             <span className="font-bold text-base">Qty</span>
//                             <Select onValueChange={(value) => setQty(Number(value))}>
//                                 <SelectTrigger className="w-[180px]">
//                                     <SelectValue placeholder="Select"/>
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     {[1, 2, 3, 4, 5].map((num) => (
//                                         <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
//                                     ))}
//                                 </SelectContent>
//                             </Select>
//                         </div>
//
//                         {/* Action buttons */}
//                         <div className="flex items-center gap-5">
//                             <Button className="bg-black hover:bg-black font-bold" onClick={handleAddToCart}>
//                                 Add to Cart
//                             </Button>
//                             <Button className="bg-[#ff6b2d] hover:bg-[#ff6b2d] font-bold">Buy Now</Button>
//                         </div>
//
//                         {/* Description and specifications */}
//                         <div className="flex flex-col gap-5">
//                             <div>
//                                 <h4 className="text-base font-bold">Description</h4>
//                                 <p>{product.description}</p>
//                             </div>
//                         </div>
//
//                         <div className="flex gap-20">
//                             <div className="flex flex-col gap-2">
//                                 <h4 className="text-base font-bold">Specifications</h4>
//                                 <div>
//                                     <p className="text-sm"><span className="font-bold">Model:</span> AM072</p>
//                                     <p className="text-sm"><span className="font-bold">Weight:</span> 0.8 Kg</p>
//                                     <p className="text-sm"><span className="font-bold">Material:</span> Canvas</p>
//                                 </div>
//                             </div>
//
//                             <div className="flex flex-col gap-2">
//                                 <h4 className="text-base font-bold">Features</h4>
//                                 <div>
//                                     <p className="text-sm">Style: Leisure</p>
//                                     <p className="text-sm">Upper material: Canvas</p>
//                                     <p className="text-sm">Sole material: Rubber</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//             {/* Review form */}
//             {userInfo && (
//                 <form onSubmit={handleSubmitReview} className="mt-5">
//                     <h2 className="text-xl font-bold mb-2">Write a Customer Review</h2>
//                     <div className="mb-2">
//                         <label htmlFor="rating" className="block mb-1">Rating</label>
//                         <Select onValueChange={(value) => setRating(Number(value))}>
//                             <SelectTrigger className="w-full">
//                                 <SelectValue placeholder="Select a rating..."/>
//                             </SelectTrigger>
//                             <SelectContent>
//                                 <SelectItem value="1">1 - Poor</SelectItem>
//                                 <SelectItem value="2">2 - Fair</SelectItem>
//                                 <SelectItem value="3">3 - Good</SelectItem>
//                                 <SelectItem value="4">4 - Very Good</SelectItem>
//                                 <SelectItem value="5">5 - Excellent</SelectItem>
//                             </SelectContent>
//                         </Select>
//                     </div>
//                     <div className="mb-2">
//                         <label htmlFor="comment" className="block mb-1">Comment</label>
//                         <Textarea
//                             id="comment"
//                             value={comment}
//                             onChange={(e) => setComment(e.target.value)}
//                             className="w-full p-2 border rounded"
//                             rows={3}
//                         />
//                     </div>
//                     <Button
//                         className="bg-[#ff6b2d] hover:bg-[#ff6b2d] font-bold"
//                         type="submit"
//                         disabled={loadingProductReview || rating === 0}
//                     >
//                         Submit Review
//                     </Button>
//                 </form>
//             )}
//         </Container>
//     );
// };
//
// export default ProductDesc;
