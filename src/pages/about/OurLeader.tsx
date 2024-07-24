import {MdChevronRight} from "react-icons/md";

const OurLeader = () => {
    return (
        <div className="our-leader flex mt-32">
            <div className="w-[50vw]"></div>
            <div className="flex flex-col gap-10 text-white w-[50vw] m-auto">
                <div className="flex flex-col gap-5">
                    <h1 className="md:text-5xl text-lg font-bold">Our Leaders</h1>
                    <p className="md:text-base text-xs md:leading-normal leading-2">
                        Meet the visionary leaders at Trendy Shoes who are shaping our company's future and
                        revolutionizing
                        the ecommerce landscape. Their innovative strategies and dedication to excellence are driving
                        growth
                        and ensuring that we remain at the forefront of the industry. Get to know the team behind our
                        success and learn how they are transforming the way people buy and sell online.
                    </p>
                </div>
                <div
                    className="flex items-center gap-2 hover:underline transform duration-300 cursor-pointer font-bold">
                    <p>Learn more</p>
                    <MdChevronRight/>
                </div>
            </div>
        </div>
    );
};

export default OurLeader;
