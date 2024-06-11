import React from "react";

interface IContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({children}) => {
    return (
        <div className="xl:px-20 md:px-10 sm:px-2 px-4">
            {children}
        </div>
    );
};

export default Container;
