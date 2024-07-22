import Container from "@/Container.tsx";
import {Input} from "@/components/ui/input.tsx";
import {SkeletonDemo} from "@/components/Loader.tsx";
import React, {useState} from "react";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [enquiry, setEnquiry] = useState("");
    const [orderNumber, setOrderNumber] = useState("");
    const [message, setMessage] = useState("");

    const isLoading = false;
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <div>
            <Container>
                <section className="flex flex-col items-center justify-center min-h-screen">
                    <h2 className="text-2xl font-bold">Get In Touch</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="flex lg:flex-row flex-col items-center lg:gap-2 gap-5 my-[2rem]">
                            <div className="flex flex-col gap-1 flex-1">
                                <label htmlFor="firstName" className="block text-sm font-bold">
                                    Name
                                </label>
                                <Input
                                    className="lg:w-[14.7vw] md:w-[30rem] w-[20rem] border border-gray-500"
                                    type="text"
                                    placeholder="Enter Name"
                                    value={name}
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col gap-1 md:mt-0 mt-[2rem]">
                                <label htmlFor="lastName" className="block text-sm font-bold">
                                    Email
                                </label>
                                <Input
                                    className="lg:w-[14.7vw] md:w-[30rem] w-[20rem] border border-gray-500"
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 my-[2rem]">
                            <label htmlFor="email" className="block text-sm font-bold">
                                Type of Enquiry
                            </label>
                            <Input
                                className="md:w-[30rem] border border-gray-500 w-full"
                                type="text"
                                placeholder="Enter Type of Enquiry"
                                value={enquiry}
                                id="enquiry"
                                onChange={(e) => setEnquiry(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-1 my-[2rem]">
                            <label htmlFor="phoneNumber" className="block text-sm font-bold">
                                Order Number
                            </label>
                            <Input
                                className="md:w-[30rem] border border-gray-500 w-[20rem]"
                                type="text"
                                placeholder="Enter Order Number"
                                value={orderNumber}
                                id="orderNumber"
                                onChange={(e) => setOrderNumber(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-1 my-[2rem]">
                            <label htmlFor="phoneNumber" className="block text-sm font-bold">
                                Message
                            </label>
                            <Textarea
                                className="md:w-[30rem] w-[20rem] border border-gray-500"
                                placeholder="Enter complete message"
                                value={message}
                                id="orderNumber"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>

                        <Button className="bg-[#ff6b2d] hover:bg-[#ff6b2d] w-full text-white font-bold">
                            SEND
                        </Button>

                        {isLoading && <SkeletonDemo/>}
                    </form>
                </section>
            </Container>
        </div>
    );
};

export default Contact;
