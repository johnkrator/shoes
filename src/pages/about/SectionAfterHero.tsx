const SectionAfterHero = () => {
    return (
        <div className="flex lg:flex-row flex-col my-5 items-center gap-5">
            <div className="section-after-hero-a text-[#9E4925] flex flex-col justify-center lg:px-10 px-3">
                <div className="lg:mt-80 md:mt-40 pb-2 mt-20">
                    <h1 className="font-bold">FOR SELLERS</h1>
                    <h2 className="font-bold">Expand your customer base and grow your business.</h2>
                    <p className="md:text-base text-sm">
                        We provide sellers with the opportunity to grow their businesses with minimal barriers,
                        regardless
                        of size, background, or geographic location. We don't compete with our sellers; we succeed when
                        they
                        thrive.
                    </p>
                </div>
            </div>

            <div className="section-after-hero-b text-[#9E4925] flex flex-col justify-center lg:px-10 px-3">
                <div className="lg:mt-80 md:mt-40 pb-2 mt-20">
                    <h1 className="font-bold">FOR ATHLETES</h1>
                    <h2 className="font-bold">Browse an extensive selection of quality sport shoes.</h2>
                    <p className="md:text-base text-sm">
                        Buyers on the Trendy Shoes marketplace, its localized counterparts, and the Trendy Shoes mobile
                        app enjoys a highly personalized experience with an unmatched selection and excellent value.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SectionAfterHero;
