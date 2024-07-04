import React, {useEffect, useRef, useState, forwardRef, ForwardedRef} from "react";

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
}

const LazyImage = forwardRef<HTMLDivElement, LazyImageProps>(
    ({src, alt, className}, ref: ForwardedRef<HTMLDivElement>) => {
        const [inView, setInView] = useState(false);
        const imgRef = useRef<HTMLImageElement | HTMLDivElement>(null);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.disconnect();
                    }
                },
                {
                    rootMargin: "100px",
                }
            );

            if (imgRef.current) {
                observer.observe(imgRef.current);
            }

            return () => {
                if (imgRef.current) {
                    observer.unobserve(imgRef.current);
                }
            };
        }, []);

        return (
            <div ref={ref} className={className}>
                {inView ? (
                    <img
                        ref={imgRef as React.RefObject<HTMLImageElement>}
                        src={src}
                        alt={alt}
                        className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110 rounded-xl"
                    />
                ) : (
                    <div
                        ref={imgRef as React.RefObject<HTMLDivElement>}
                        className="w-full h-full bg-transparent backdrop-blur-md rounded-xl"
                    />
                )}
            </div>
        );
    });

export default LazyImage;
