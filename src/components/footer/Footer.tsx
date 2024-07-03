import {FaRegEnvelope} from "react-icons/fa";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import FooterSocials from "@/components/footer/FooterSocials.tsx";
import FooterLinks from "@/components/footer/FooterLinks.tsx";


const Footer = () => {
    return (
        <div className="xl:px-20 md:px-10 sm:px-2 px-4 py-5 bg-[#180A00] text-[#fff]">
            <div className="flex flex-col justify-center gap-10">
                <h1 className="text-center lg:text-xl font-bold">Get a 20% off on all products</h1>
                <div
                    className="md:flex items-center justify-between p-5 rounded-xl bg-[#D9D9D9] text-[#180a00] font-bold">
                    <h1 className="md:mb-0 mb-5 md:text-start text-center font-bold lg:text-lg">
                        SIGN UP FOR <span className="text-[#E0551B]">UPDATES</span> AND NEWSLETTER
                    </h1>
                    <div className="flex items-center gap-5">
                        <div className="relative">
                            <FaRegEnvelope className="absolute top-3 text-[#909090] left-3" size={20}/>
                            <Input
                                type="email"
                                className="text-[#180a00] bg-inherit border border-[#909090] font-bold px-10"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <Button className="bg-[#E0551B] hover:bg-[#E0551B] font-bold">
                            Subscribe
                        </Button>
                    </div>
                </div>

                <div className="lg:flex">
                    <FooterSocials/>
                    <FooterLinks/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
