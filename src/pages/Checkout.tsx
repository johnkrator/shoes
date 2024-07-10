import ComingSoon from "@/components/ComingSoon.tsx";
import ProgressSteps from "@/components/ProgressSteps.tsx";

const Checkout = () => {
    return (
        <div>
            <ProgressSteps step1={true} step2={true} step3={true} step4={false} step5={false}/>
            <ComingSoon/>
        </div>
    );
};

export default Checkout;
