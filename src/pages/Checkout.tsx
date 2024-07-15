import React, { useState } from "react";

import ProgressSteps from "@/components/ProgressSteps.tsx";
import Container from "@/Container";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "react-router-dom";
import OrSeparator from "@/components/ui/orSeparator";
import { FaCcVisa } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import { LiaCcAmex } from "react-icons/lia";
import { LiaCcDiscover } from "react-icons/lia";

const Checkout = () => {
  const [contactInfo, setContactInfo] = useState({ Email: "" });
  const [deliveryOptions, setDeliveryOptions] = useState({});
  const [orderSummary, setOrderSummary] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});
  const [shippingMethod, setShippingMethod] = useState("");

  const handleContactInfoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handledeliveryOptionsChange = (info) => {
    setDeliveryOptions(info);
  };

  const handleOrderSummaryChange = (info) => {
    setOrderSummary(info);
  };

  const handlePaymentInfoChange = (info) => {
    setPaymentInfo(info);
  };

  const handleShippingMethod = (method) => {
    setShippingMethod(method);
  };

  const handleSubmit = () => {
    // Submit order logic here
    console.log("Order submitted", {
      contactInfo,
      deliveryOptions,
      orderSummary,
      paymentInfo,
      shippingMethod,
    });
  };

  return (
    <div className="">
      <Container>
        <div>
          <ProgressSteps
            step1={true}
            step2={true}
            step3={true}
            step4={false}
            step5={false}
          />
        </div>

        <h1 className="text-center font-bold text-2xl">Express Checkout</h1>
        <div className="text-center">
          <Button className="bg-[#FF773E] hover:bg-[#E0551B] w-60 h-10 mt-[10px] gap-1 p-[10px]">
            Shop
            <span className="text-[#3F52FC] weight-800 bg-white w-10 rounded-md h-[25px] ">
              pay
            </span>
          </Button>
        </div>
        <OrSeparator />
      </Container>

      <section title="Contact">
        <ContactInfo />
      </section>

      <section title="Delivery">
        <DeliveryOptions onChange={handledeliveryOptionsChange} />
      </section>

      <section title="Order Summary">
        <OrderSummary onChange={handleOrderSummaryChange} />
      </section>

      <section title="Payment">
        <PaymentInfo onChange={handlePaymentInfoChange} />
      </section>

      <section title="Shipping Method">
        <ShippingMethod onChange={handleShippingMethod} />
      </section>

      <confirmationButton onSubmit={handleSubmit} />
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};

// Define the components for each section

const ContactInfo = () => {
  return (
    <Container>
      <div>
        <div className="flex justify-between text-2xl font-bold my-4">
          <a href="">Contact</a> <a href="">Login</a>
        </div>
        <Form>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-[#3F52FC]"
            required
          />
          <Checkbox className="my-[20px]" />
          <label htmlFor=""> Email me with news and offers</label>
        </Form>
      </div>
    </Container>
  );
};

type DeliveryOptionsProps = {
  onChange: (info: string) => void; // Replace 'any' with the actual type
};

const DeliveryOptions: React.FC<DeliveryOptionsProps> = ({ onChange }) => {
  const handleDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Container>
      <div className="my-3">
        <h2 className="text-2xl font-bold mb-4">Delivery</h2>
        <div className="border border-[#3F52FC] p-2 mt-4">
          <label className="block mb-2 cursor-pointer ">
            <div className="flex justify-between items-center">
              <input
                type="radio"
                name="delivery"
                value="express"
                className=""
                onChange={handleDeliveryChange}
              />
              <p className="mr-auto pl-2"> Ship</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25
                     4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 
                     2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 
                     0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </div>
          </label>
        </div>

        <div className="border border-[#3F52FC] p-2">
          <label className="block mb-2 cursor-pointer ">
            <div className="flex justify-between items-center">
              <input
                type="radio"
                name="delivery"
                value="express"
                className=""
                onChange={handleDeliveryChange}
              />
              <p className="mr-auto pl-2"> pick in store</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.0}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 
                  0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001
                  0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 
                  0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004
                  3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0
                  1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 
                  .414.336.75.75.75Z"
                />
              </svg>
            </div>
          </label>
        </div>

        <form>
          <select
            name="country"
            onChange={onChange}
            className="block w-full mb-2 p-2 my-4 border border-[#3F52FC] rounded"
          >
            <option value="">Select your country/Region</option>
            <option value="Nigeria">Nigeria</option>
            <option value="USA">USA</option>
            <option value="AF">Afghanistan</option>
            <option value="AX">Aland Islands</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AS">American Samoa</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AQ">Antarctica</option>
            <option value="AG">Antigua and Barbuda</option>
          </select>
          <div className="flex gap-2 my-4">
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              onChange={onChange}
              className="block w-1/2 mb-2 p-2 border border-[#3F52FC] rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              onChange={onChange}
              className="block w-1/2 mb-2 p-2 border border-[#3F52FC] rounded"
              required
            />
          </div>
          <input
            type="text"
            name="company"
            placeholder="Company (optional)"
            onChange={onChange}
            className="block w-full mb-2 p-2  border border-[#3F52FC] rounded"
          />
          <div className="border border-[#3F52FC] rounded block w-full p-2 my-4 flex justify-between">
            <p>Enter your address</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>

          <input
            type="text"
            name="apartment"
            placeholder="Apartment, suite, etc. (optional)"
            onChange={onChange}
            className="block w-full mb-2 p-2 my-2 border border-[#3F52FC] rounded"
          />
          <div className="flex gap-2">
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={onChange}
              className="block w-full mb-2 p-2 border border-[#3F52FC] rounded"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State/Province"
              onChange={onChange}
              className="block w-full mb-2 p-2 border border-[#3F52FC] rounded"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip/Postal Code"
              onChange={onChange}
              className="block w-full mb-2 p-2 border border-[#3F52FC] rounded"
              required
            />
          </div>
          <input
            type="text"
            name="phone"
            placeholder="Enter your Phone number"
            onChange={onChange}
            className="block w-full mb-2 p-4 border border-[#3F52FC] bg-[#F3F5F7] rounded"
            required
          />
        </form>
      </div>
    </Container>
  );
};

type ShippingMethodProps = {
  onChange: (info: string) => void; // Replace 'any' with the actual type
};

const ShippingMethod: React.FC<ShippingMethodProps> = ({ onChange }) => {
  const handleShippingMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Container className="my-4">
      <h2 className="text-2xl font-bold mb-4">Shipping Method</h2>

      <div className="flex flex-col items-start">
        <div className="block w-full p-2 mb-  border border-[#3F52FC] rounded flex items-center">
          <input
            type="radio"
            id="shipping-method-1"
            name="shipping-method"
            value="UPS Worldwide Expedited"
            className="mr-2"
            onChange={handleShippingMethod}
          />
          <label
            htmlFor="shipping-method-1"
            className="text-grey-800 cursor-pointer"
          >
            UPS Worldwide Expedited
          </label>
          
          <p className="ml-auto">(₦81,200.00)</p>
        </div>

        <div className="block w-full p-2  border border-[#3F52FC] rounded flex items-center">
          <input
            type="radio"
            id="shipping-method-2"
            name="shipping-method"
            value="DHL Express Worldwide"
            className="mr-2"
            onChange={handleShippingMethod}
          />
          <label
            htmlFor="shipping-method-2"
            className="text-grey-800 cursor-pointer"
          >
            DHL Express Worldwide
          </label>
          <p className="ml-auto">(₦154,000.00)</p>
        </div>
      </div>
    </Container>
  );
};

type PaymentInfoProps = {
  onChange: (info: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
    cardName: string;
  }) => void;
};

const PaymentInfo: React.FC<PaymentInfoProps> = ({ onChange }) => {
  const [details, setDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    cardName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
    onChange(details); // Call the onChange prop with the updated details
  };

  return (
    <Container>
     <h2 className="text-2xl font-bold">Payment </h2>
      <p className="">All transactions are secure and encrypted</p> 
      <div className="bg-[#F4F9FE] block w-full p-3 flex justify-between border border-[#3F52FC]">
          <p className="p-1 font-bold">Credit Card</p>
          <div className="flex gap-2">

          <div className="bg-white rounded">
          <FaCcVisa className="text-4xl"/>
          </div>

          <div className="bg-white rounded">
          <SiMastercard className="text-4xl w-[40]"/>
          </div>

          <div className="bg-white  rounded">
          <LiaCcAmex className="text-4xl"/>
          </div>

            <div className="bg-white rounded">
            <LiaCcDiscover className="text-4xl"/>
          </div>
             <div className="p-1 ">
                +4
             </div>
          </div>
     </div> 

     <Form className="bg-[#DDDDDD] p-2 border border-[#000000] ">
        
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={details.cardNumber}
            onChange={handleChange}
            className="block w-full mb-2 p-2 mt-2 border border-blue-500  rounded text-[#000000]"
            required
          />
           <div className="flex gap-4 py-2">
          <input
            type="text"
            name="expirationDate"
            placeholder="Expiration date (MM / YY)"
            value={details.expirationDate}
            onChange={handleChange}
            className="block w-full mb-2 p-2 border border-blue-500 rounded text-[#000000]"
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="Security code"
            value={details.cvv}
            onChange={handleChange}
            className="block w-full mb-2 p-2 border border-blue-500 rounded"
            required
          />
           </div>
          <input
            type="text"
            name="cardName"
            placeholder="Name on card"
            value={details.cardName}
            onChange={handleChange}
            className="block w-full mb-8 p-2 border border-blue-500 rounded"
            required
          />
        </Form>
         
        <div>
         
        </div>
    </Container>
  );
};

type OrdersummaryProps = {
  onChange: (info: string) => void;
};

const OrderSummary: React.FC<OrdersummaryProps> = ({ onChange }) => {
  return (
    <Container>
      <div onChange={(event) => onChange(event.target.value)}></div>
    </Container>
  );
};

export default Checkout;
