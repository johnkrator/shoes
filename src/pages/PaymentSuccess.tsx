import {useEffect} from "react";
import Container from "@/Container.tsx";
import confetti from "canvas-confetti";
import {Button} from "@/components/ui/button.tsx";
import {GoChevronLeft} from "react-icons/go";
import {Link} from "react-router-dom";

const PaymentSuccess = () => {
    useEffect(() => {
        // Trigger confetti effect when component mounts
        confetti({
            particleCount: 100,
            spread: 70,
            origin: {y: 0.6}
        });
    }, []);

    return (
        <Container>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-4xl text-center font-bold mb-4">Payment Successful!</h1>
                <p className="text-xl text-gray-600">Thank you for your purchase.</p>
                <div className="flex flex-col gap-2">
                    <Button
                        className="mt-8 px-6 py-2 bg-[#e15420] text-white rounded-lg hover:bg-[#e15420] font-bold transition-colors"
                        onClick={() => {
                            confetti({
                                particleCount: 100,
                                spread: 70,
                                origin: {y: 0.6}
                            });
                        }}
                    >
                        Celebrate Again!
                    </Button>
                    <Link className="flex items-center capitalize font-bold hover:underline" to="/">
                        <GoChevronLeft/>
                        go to back to homepage
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default PaymentSuccess;
