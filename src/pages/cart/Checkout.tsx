import {Link} from "react-router-dom";
import Container from "@/Container.tsx";
import {GoChevronLeft} from "react-icons/go";

const Checkout = () => {
    return (
        <div>
            <Container>
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
