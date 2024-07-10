import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "@/redux/features/cartSlice.ts";
import Container from "@/Container.tsx";
import ProgressSteps from "@/components/ProgressSteps.tsx";
import {GoChevronLeft} from "react-icons/go";
import LazyImage from "@/components/LazyImage.tsx";
import paypal from "@/assets/Rectangle 5724.png";
import googlePay from "@/assets/Rectangle 5747.png";
import {Separator} from "@/components/ui/separator.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Label} from "@/components/ui/label";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface CartItem {
    _id: string;
    name: string;
    images: string[];
    price: number;
    discount_price?: number;
    countInStock?: number;
    qty: number;
    colors?: string[];
    size?: string;
}

interface RootState {
    cart: {
        cartItems: CartItem[];
    };
}

const Cart: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state: RootState) => state.cart);
    const {cartItems} = cart;

    const handleAddToCart = (product: CartItem, qty: number) => {
        dispatch(addToCart({...product, qty}));
    };

    const handleRemoveFromCart = (id: string) => {
        dispatch(removeFromCart(id));
    };

    const handleCheckout = () => {
        navigate("/login?redirect=/checkout");
    };

    const subtotal = cartItems.reduce(
        (acc, item) => acc + (item.discount_price || item.price) * item.qty,
        0
    );

    const shippingOptions = [
        {label: "Standard - $5.00", value: "standard", price: 5, date: "Sat July, 28th"},
        {label: "EXPRESS - $15.00", value: "express", price: 15, date: "Thu July, 18th"},
        {label: "RUSH - $30.00", value: "rush", price: 30, date: "Sun July, 14th"},
    ];

    const [selectedShipping, setSelectedShipping] = React.useState(shippingOptions[0]);

    const renderCartItem = (item: CartItem) => (
        <div key={item._id} className="flex flex-col gap-2 bg-[#472810] text-white px-5 py-3">
            <h1 className="font-bold md:text-base text-sm">{item.name}</h1>
            <div className="flex md:flex-row flex-col md:gap-20 gap-10">
                <div className="flex md:flex-row flex-col gap-3">
                    {item.images && item.images.length > 0 && (
                        <LazyImage
                            src={item.images[0]}
                            alt={item.name}
                            className="md:w-[140px] md:h-[140px] h-[180px] object-cover"
                        />
                    )}
                    <div>
                        <p className="text-sm">Color: {item.colors ? item.colors[0] : "N/A"}</p>
                        <p className="text-sm">Size: {item.size || "N/A"}</p>
                        <p className="text-sm">Item #: {item._id}</p>
                        <div className="mt-3 flex gap-3 text-[#FF750A] font-bold underline">
                            <p className="cursor-pointer capitalize">edit</p>
                            <p
                                className="cursor-pointer capitalize"
                                onClick={() => handleRemoveFromCart(item._id)}
                            >
                                remove
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:gap-10 gap-5">
                    <div>
                        <h4 className="font-bold mb-2">Each</h4>
                        <p className="text-sm">
                            ${item.discount_price ? item.discount_price.toFixed(2) : item.price.toFixed(2)}
                        </p>
                        {item.discount_price && (
                            <p className="text-sm line-through text-gray-400">${item.price.toFixed(2)}</p>
                        )}
                    </div>
                    <div className="">
                        <h4 className="font-bold mb-2">Quantity</h4>
                        <Select
                            value={item.qty.toString()}
                            onValueChange={(value) => handleAddToCart(item, Number(value))}
                        >
                            <SelectTrigger className="w-[180px] bg-white text-black">
                                <SelectValue/>
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                {[...Array(item.countInStock || 10).keys()].map((x) => (
                                    <SelectItem
                                        key={x + 1}
                                        value={(x + 1).toString()}
                                        className="text-black"
                                    >
                                        {x + 1}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Subtotal</h4>
                        <p className="text-sm">
                            ${((item.discount_price || item.price) * item.qty).toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="my-10">
            <Container>
                <ProgressSteps step1={true} step2={true} step3={false} step4={false} step5={false}/>

                {cartItems.length === 0 ? (
                    <div>
                        <h1 className="flex gap-5">
                            Your cart is empty
                            <Link className="capitalize font-bold hover:underline" to="/shop">
                                go to shop
                            </Link>
                        </h1>
                    </div>
                ) : (
                    <div className="flex lg:flex-row flex-col gap-5">
                        <div className="flex flex-col gap-2 lg:w-[60rem]">
                            <h1 className="text-[40px] font-bold whitespace-nowrap">Shopping Cart</h1>
                            <Link to="/shop" className="flex items-center underline">
                                <GoChevronLeft/>
                                <span>Continue Shopping</span>
                            </Link>
                            <div className="flex flex-col gap-3">
                                <p className="whitespace-nowrap md:text-base text-sm text-center font-bold bg-[#7B6C60] text-white md:p-5 p-2">
                                    Estimated Delivery Date:{" "}
                                    <span className="text-[#FF750A]">{selectedShipping.date}</span>
                                </p>
                                {cartItems.map((item) => (
                                    <React.Fragment key={item._id}>
                                        {renderCartItem(item)}
                                        <Separator/>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 lg:w-[40rem]">
                            <Button
                                className="w-full bg-[#FF773E] hover:bg-[#FF773E] shadow-md rounded-xl font-bold"
                                onClick={handleCheckout}
                            >
                                CHECKOUT
                            </Button>

                            <div className="flex flex-col gap-3 w-full">
                                <div className="flex flex-row gap-5">
                                    <LazyImage
                                        src={paypal}
                                        alt="paypal"
                                        className="w-[165px] h-[60px] object-cover shadow-md rounded-xl p-2 cursor-pointer"
                                    />
                                    <LazyImage
                                        src={googlePay}
                                        alt="google pay"
                                        className="w-[165px] h-[60px] object-cover shadow-md rounded-xl p-2 cursor-pointer"
                                    />
                                </div>

                                <div>
                                    <h1 className="font-bold text-2xl">Shipping Options</h1>
                                    <div>
                                        <RadioGroup
                                            value={selectedShipping.value}
                                            onValueChange={(value) =>
                                                setSelectedShipping(
                                                    shippingOptions.find((option) => option.value === value) ||
                                                    shippingOptions[0]
                                                )
                                            }
                                            className="flex flex-col gap-3 bg-[#7B6C60] text-white p-5"
                                        >
                                            {shippingOptions.map((option) => (
                                                <div key={option.value}>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem
                                                            value={option.value}
                                                            id={option.value}
                                                            className="border-[#FF773E] data-[state=checked]:bg-[#FF773E] data-[state=checked]:border-[#FF773E]"
                                                        />
                                                        <Label htmlFor={option.value}>{option.label}</Label>
                                                    </div>
                                                    <p>Delivers by {option.date}</p>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <h1 className="font-bold text-2xl">Order Summary</h1>
                                    <Separator/>

                                    <div className="flex flex-col gap-3">
                                        <div className="flex justify-between">
                                            <p>Product Total</p>
                                            <p>${subtotal.toFixed(2)}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <div>
                                                <p>Shipping {selectedShipping.label.split(" - ")[0]}</p>
                                                <p>{selectedShipping.date}</p>
                                            </div>
                                            <p>${selectedShipping.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p>You saved</p>
                                            <p>
                                                -$
                                                {cartItems
                                                    .reduce(
                                                        (acc, item) =>
                                                            acc +
                                                            (item.price - (item.discount_price || item.price)) *
                                                            item.qty,
                                                        0
                                                    )
                                                    .toFixed(2)}
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p>Sales tax</p>
                                            <p>TBD</p>
                                        </div>
                                    </div>
                                </div>

                                <Separator/>

                                <div className="flex justify-between items-center font-bold">
                                    <h1>Subtotal</h1>
                                    <h1>${(subtotal + selectedShipping.price).toFixed(2)}</h1>
                                </div>

                                <Button
                                    className="w-full bg-[#FF773E] hover:bg-[#FF773E] shadow-md rounded-xl font-bold"
                                    onClick={handleCheckout}
                                >
                                    CHECKOUT
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Cart;
