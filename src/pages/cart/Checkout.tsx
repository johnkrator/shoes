import ProgressSteps from "@/components/ProgressSteps.tsx";
import {Link} from "react-router-dom";
import Container from "@/Container.tsx";
import {GoChevronLeft} from "react-icons/go";

const Checkout = () => {
    return (
        <div>
            <Container>
                <ProgressSteps step1={true} step2={true} step3={true} step4={false} step5={false}/>
                <div>
                    <h1 className="flex flex-col gap-1">
                        Review your order before checkout
                        <Link className="flex items-center capitalize font-bold hover:underline" to="/cart">
                            <GoChevronLeft/>
                            go to back to cart
                        </Link>
                    </h1>
                </div>
            </Container>
        </div>
    );
};

export default Checkout;
