import ProgressSteps from "@/components/ProgressSteps.tsx";
import { Link } from "react-router-dom";
import Container from "@/Container.tsx";
import { GoChevronLeft } from "react-icons/go";
import { Separator } from "@/components/ui/separator.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import LazyImage from "@/components/LazyImage.tsx";
import shoe1 from "@/assets/Rectangle 5721.png";
import shoe2 from "@/assets/Rectangle 5722.png";
import { Button } from "@/components/ui/button.tsx";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.tsx";
import { BsTruck } from "react-icons/bs";
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { IoLocationOutline } from "react-icons/io5";
import masterCard from "@/assets/Rectangle 71.png";
import visa from "@/assets/Rectangle 75.png";
import amex from "@/assets/Rectangle 74.png";
import discover from "@/assets/Rectangle 73.png";
import plus4 from "@/assets/Group 49450.png";
import { GiPadlock } from "react-icons/gi";

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  return (
    <div>
      <Container>
        <ProgressSteps step1={true} step2={true} step3={false} />
        <div>
          <h1 className="flex flex-col gap-1">
            Review your order before checkout
            <Link
              className="flex items-center capitalize font-bold hover:underline"
              to="/cart"
            >
              <GoChevronLeft />
              go to back to cart
            </Link>
          </h1>
        </div>

        <div className="flex lg:flex-row flex-col gap-5 my-10">
          <div className="flex flex-col items-center gap-5 lg:w-3/5 w-full">
            <h1 className="font-bold">Express Checkout</h1>
            <div className="flex justify-center items-center gap-2 font-bold bg-[#FF773E] capitalize rounded-xl shadow-md w-[350px] h-[70px] text-white">
              <Link to="/shop">
                <p>shop</p>
              </Link>
              <Link to="">
                <p className="bg-white text-[#3F52FC] px-3 py-1 rounded-lg">
                  pay
                </p>
              </Link>
            </div>

            <div className="flex items-center justify-center w-full my-4">
              <Separator className="flex-grow max-w-[30%]" />
              <span className="flex-shrink-0 px-2 sm:px-4 uppercase font-bold">
                or
              </span>
              <Separator className="flex-grow max-w-[30%]" />
            </div>

            {/*email*/}
            <div className="flex flex-col gap-2 w-full">
              <Label className="font-bold">Contact</Label>
              <div className="w-full">
                <Input
                  className="border border-gray-500 w-full"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className="flex items-center gap-1">
                <Checkbox />
                <p>Email me with news and offers</p>
              </div>
            </div>

            {/*delivery*/}
            <div className="flex flex-col gap-2 w-full">
              <Label className="font-bold">Delivery</Label>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center justify-between border border-gray-500 p-3 rounded-lg w-full">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Ship</Label>
                  </div>
                  <BsTruck />
                </div>
                <div className="flex items-center justify-between border border-gray-500 p-3 rounded-lg w-full">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Pickup in store</Label>
                  </div>
                  <MdOutlineStoreMallDirectory />
                </div>
              </RadioGroup>

              <Select>
                <SelectTrigger className="border border-gray-500 w-full">
                  <SelectValue placeholder="Select your Country/Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Nigeria</SelectItem>
                  <SelectItem value="dark">Ghana</SelectItem>
                  <SelectItem value="system">Angola</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2">
                <Input
                  className="border border-gray-500 w-full"
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                />
                <Input
                  className="border border-gray-500 w-full"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>

              <Input
                className="border border-gray-500 w-full"
                name="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company (optional)"
              />

              <div className="relative">
                <Input
                  className="border border-gray-500 w-full"
                  name="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your Address"
                />
                <IoLocationOutline className="absolute top-3 right-2" />
              </div>

              <Input
                className="border border-gray-500 w-full"
                name="apartment"
                type="text"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                placeholder="Apartment, suite, etc. (optional)"
              />

              <div className="flex items-center gap-2">
                <Select>
                  <SelectTrigger className="border border-gray-500 w-full">
                    <SelectValue placeholder="City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Enugu</SelectItem>
                    <SelectItem value="dark">Delta</SelectItem>
                    <SelectItem value="system">Lagos</SelectItem>
                    <SelectItem value="system">Abuja</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="border border-gray-500 w-full">
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Enugu</SelectItem>
                    <SelectItem value="dark">Delta</SelectItem>
                    <SelectItem value="system">Lagos</SelectItem>
                    <SelectItem value="system">Abuja</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  className="border border-gray-500 w-full"
                  name="zip"
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="Zip code"
                />
              </div>

              <Input
                className="border border-gray-500 w-full"
                name="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your Phone number"
              />
            </div>

            {/*shipping*/}
            <div className="flex flex-col gap-2 w-full">
              <Label className="font-bold">Shipping Method</Label>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center justify-between border border-gray-500 p-3 rounded-lg w-full">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="option-one" className="font-bold">
                        UPS Worldwide Expedited
                      </Label>
                      <Label htmlFor="option-one">8 business days</Label>
                    </div>
                  </div>
                  <p className="font-bold">#81,200.00</p>
                </div>
                <div className="flex items-center justify-between border border-gray-500 p-3 rounded-lg w-full">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="option-two" className="font-bold">
                        DHL Express Worldwide
                      </Label>
                      <Label htmlFor="option-two">3 to 5 business days</Label>
                    </div>
                  </div>
                  <p className="font-bold">#154,000.00</p>
                </div>
              </RadioGroup>
            </div>

            {/*payment*/}
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col gap-1">
                <Label className="font-bold">Payment</Label>
                <span>All transactions are secure and encrypted</span>
              </div>
              <div className="flex flex-col gap-2 bg-[#DDDDDD] p-5 rounded-lg">
                {/*card options*/}
                <div className="flex md:flex-row flex-col md:gap-0 gap-2 items-center justify-between bg-[#F4F9FE] border border-gray-500 p-3 rounded-lg">
                  <p>Credit card</p>
                  <div className="grid md:grid-cols-5 grid-cols-3 items-center gap-1">
                    <LazyImage
                      src={masterCard}
                      alt="mastercard"
                      className="w-[70px] h-[35px] object-cover"
                    />
                    <LazyImage
                      src={visa}
                      alt="visa"
                      className="w-[70px] h-[35px] object-cover"
                    />
                    <LazyImage
                      src={amex}
                      alt="amex"
                      className="w-[70px] h-[35px] object-cover"
                    />
                    <LazyImage
                      src={discover}
                      alt="discover"
                      className="w-[70px] h-[35px] object-cover"
                    />
                    <LazyImage
                      src={plus4}
                      alt="plus4"
                      className="w-[70px] h-[35px] object-cover"
                    />
                  </div>
                </div>

                {/*card*/}
                <div className="relative">
                  <Input
                    className="border border-gray-500 w-full"
                    name="cardNumber"
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Credit card"
                  />
                  <GiPadlock className="absolute top-3 right-2" />
                </div>

                <div className="flex items-center gap-2">
                  <Input
                    className="border border-gray-500 w-full"
                    name="expiryDate"
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="Expiration date (MM / YY)"
                  />
                  <Input
                    className="border border-gray-500 w-full"
                    name="securityCode"
                    type="text"
                    value={securityCode}
                    onChange={(e) => setSecurityCode(e.target.value)}
                    placeholder="Security code"
                  />
                </div>

                <Input
                  className="border border-gray-500 w-full"
                  name="nameOnCard"
                  type="text"
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  placeholder="Name on card"
                />
              </div>
            </div>

            {/*remember me*/}
            <div className="flex flex-col gap-2 w-full">
              <Label className="font-bold">Remember me</Label>
              <div className="flex items-center gap-2 border border-gray-500 rounded-lg p-5">
                <Checkbox className="" />
                <Label>Save my information for a faster checkout</Label>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm font-bold">
                By clicking below and completing your order, you agree to
                purchase your item(s) from Global-e as merchant of record of
                this transaction, on Global-e’s Terms of Conditions and Privacy
                Policy. Global-e is an international service provider to Trendy
                Shoes.
              </p>

              <Button className="flex items-center gap-1 bg-[#FF773E] hover:bg-[#FF773E] text-white font-bold w-full">
                <GiPadlock />
                Pay now
              </Button>
            </div>
          </div>

          {/*cart section*/}
          <div className="flex flex-col gap-3 bg-[#472810] text-white rounded-xl md:p-4 p-2 lg:w-2/5 w-full md:h-96">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center gap-2">
                  <LazyImage
                    className="w-[70px] h-[70px] object-cover"
                    src={shoe1}
                    alt=""
                  />
                  <div>
                    <p className="capitalize font-bold">simon</p>
                    <p className="capitalize text-xs">Burgundy + Rose / 35</p>
                  </div>
                </div>
                <p className="md:text-base text-sm">#212,200.00</p>
              </div>

              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center gap-2">
                  <LazyImage
                    className="w-[70px] h-[70px] object-cover"
                    src={shoe2}
                    alt=""
                  />
                  <div>
                    <p className="capitalize font-bold">frances</p>
                    <p className="capitalize text-xs">Pebbled Ivory / 35</p>
                  </div>
                </div>
                <p className="md:text-base text-sm">#369,300.00</p>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-1">
              <Input
                className="border border-gray-500 w-full text-black"
                type="text"
                placeholder="Discount code or gift card"
              />
              <Button className="bg-[#ADB0B0] hover:bg-[#ADB0B0] font-bold">
                Apply
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="capitalize text-xs">Subtotal</p>
                <p className="capitalize text-sm">#581,500.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="capitalize text-xs">Shipping</p>
                <p className="capitalize text-sm">#81,200.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="capitalize text-xs">Duties</p>
                <p className="capitalize text-sm">#135,540.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="capitalize text-xs">Taxes</p>
                <p className="capitalize text-sm">#79,429.77</p>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <p className="capitalize text-lg font-bold">Total</p>
                <p className="capitalize font-bold">#874,669.77</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
