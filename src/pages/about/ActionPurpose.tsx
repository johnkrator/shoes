import boots from "@/assets/Rectangle 5764.png";
import LazyImage from "@/components/LazyImage.tsx";

const ActionPurpose = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold md:text-5xl text-2xl text-center">Putting Our Purpose into Action</h1>
                <p className="text-lg text-center">Our marketplace empowers and unites people.</p>
            </div>
            <LazyImage
                className="object-cover w-full h-full"
                src={boots}
                alt="boots"
            />
        </div>
    );
};

export default ActionPurpose;
