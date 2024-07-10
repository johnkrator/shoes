import React from "react";
import Container from "@/Container.tsx";
import ProgressSteps from "@/components/ProgressSteps.tsx";
import {GoChevronLeft} from "react-icons/go";
import {Link} from "react-router-dom";
import LazyImage from "@/components/LazyImage.tsx";
import whiteShoe from "@/assets/Rectangle 5744.png";
import paypal from "@/assets/Rectangle 5724.png";
import googlePay from "@/assets/Rectangle 5747.png";
import {Separator} from "@/components/ui/separator.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Label} from "@/components/ui/label";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";

interface CartItemProps {
    title: string;
    color: string;
    size: string;
    itemNumber: string;
    eachPrice: string;
    quantityPrice: string;
    subtotal: string;
}

const CartItem: React.FC<CartItemProps> = ({title, color, size, itemNumber, eachPrice, quantityPrice, subtotal}) => (
    <div className="flex flex-col gap-2 bg-[#472810] text-white px-5 py-3">
        <h1 className="font-bold md:text-base text-sm">{title}</h1>
        <div className="flex md:flex-row flex-col md:gap-20 gap-10">
            <div className="flex md:flex-row flex-col gap-3">
                <LazyImage
                    src={whiteShoe}
                    alt="white shoe"
                    className="md:w-[140px] md:h-[140px] h-[180px] object-cover"
                />
                <div>
                    <p className="text-sm">Color: {color}</p>
                    <p className="text-sm">Size: {size}</p>
                    <p className="text-sm">Item #: {itemNumber}</p>
                    <div className="mt-3 flex gap-3 text-[#FF750A] font-bold underline">
                        <p className="cursor-pointer capitalize">edit</p>
                        <p className="cursor-pointer capitalize">remove</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-10">
                <div>
                    <h4 className="font-bold mb-2">Each</h4>
                    <p className="text-sm">{eachPrice}</p>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Quantity</h4>
                    <p className="text-sm">{quantityPrice}</p>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Subtotal</h4>
                    <p className="text-sm">{subtotal}</p>
                </div>
            </div>
        </div>
    </div>
);

const Cart: React.FC = () => (
    <div className="my-10">
        <Container>
            <ProgressSteps step1={true} step2={false} step3={false}/>

            <div className="flex flex-col gap-10">
                <div className="flex lg:flex-row flex-col gap-5">
                    <div className="flex flex-col gap-2 lg:w-[60rem]">
                        <h1 className="text-[40px] font-bold whitespace-nowrap">Shopping Cart</h1>
                        <Link to="/shop" className="flex items-center underline">
                            <GoChevronLeft/>
                            <span>Continue Shopping</span>
                        </Link>
                        <div className="flex flex-col gap-3">
                            <p className="whitespace-nowrap md:text-base text-sm text-center font-bold bg-[#7B6C60] text-white md:p-5 p-2">
                                Estimated Delivery Date: <span className="text-[#FF750A]">Saturday July 28th</span>
                            </p>
                            <CartItem
                                title="Men’s Merrell MQM 3 GORE-TEX"
                                color="Seamoss/Granite"
                                size="Burgundy + Rose / 35"
                                itemNumber="195017986758"
                                eachPrice="$150.00"
                                quantityPrice="$135.00"
                                subtotal="$135.00"
                            />
                            <Separator/>
                            <CartItem
                                title="Men’s Merrell MQM 3 GORE-TEX"
                                color="Seamoss/Granite"
                                size="Burgundy + Rose / 35"
                                itemNumber="195017986758"
                                eachPrice="$150.00"
                                quantityPrice="$135.00"
                                subtotal="$135.00"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 lg:w-[40rem]">
                        <Button
                            className="w-full bg-[#FF773E] hover:bg-[#FF773E] shadow-md rounded-xl font-bold"
                        >
                            CHECKOUT
                        </Button>

                        <div className="flex flex-col gap-3 w-full">
                            <div className="flex flex-row gap-5">
                                <LazyImage
                                    src={paypal} alt="paypal"
                                    className="w-[165px] h-[60px] object-cover shadow-md rounded-xl p-2 cursor-pointer"
                                />
                                <LazyImage
                                    src={googlePay} alt="google pay"
                                    className="w-[165px] h-[60px] object-cover shadow-md rounded-xl p-2 cursor-pointer"
                                />
                            </div>

                            <div>
                                <h1 className="font-bold text-2xl">Shipping Options</h1>
                                <div>
                                    <RadioGroup defaultValue="option-one"
                                                className="flex flex-col gap-3 bg-[#7B6C60] text-white p-5">
                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="option-one" id="option-one"/>
                                                <Label htmlFor="option-one">Standard - FREE</Label>
                                            </div>
                                            <p>Delivers by Sat July, 28th</p>
                                        </div>

                                        <Separator/>

                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="option-two" id="option-two"/>
                                                <Label htmlFor="option-two">EXPRESS - $15.00</Label>
                                            </div>
                                            <p>Delivers by Thu July, 18th</p>
                                        </div>

                                        <Separator/>

                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="option-three" id="option-three"/>
                                                <Label htmlFor="option-two">RUSH - $30.00</Label>
                                            </div>
                                            <p>Delivers by Sun July, 14th</p>
                                        </div>
                                    </RadioGroup>

                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h1 className="font-bold text-2xl">Order Summary</h1>
                                <Separator/>

                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-between">
                                        <p>Product Total</p>
                                        <p>$150.00</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <p>Shipping Standard</p>
                                            <p>Sat July, 28th</p>
                                        </div>
                                        <p>$0.00</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>You saved</p>
                                        <p>-$15.00</p>
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
                                <h1>$135.00</h1>
                            </div>

                            <Button
                                className="w-full bg-[#FF773E] hover:bg-[#FF773E] shadow-md rounded-xl font-bold"
                            >
                                CHECKOUT
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
);

export default Cart;
