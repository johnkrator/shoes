import Container from "@/Container.tsx";

const AboutHero = () => {
    return (
        <div className="about-hero">
            <Container>
                <div className="flex flex-col gap-3 items-center justify-center min-h-screen">
                    <h1 className="md:text-5xl text-2xl font-bold text-center">Your one-stop shop for top quality
                        sneakers</h1>
                    <p className="text-lg text-center">
                        At Trendy Shoes, we offer only the best quality of shoes. Ensuring that our customers are
                        provided with the best of qualities and value.
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default AboutHero;
