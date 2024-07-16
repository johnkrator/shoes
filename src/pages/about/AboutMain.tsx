import Container from "@/Container.tsx";
import SmallAboutNav from "@/pages/about/SmallAboutNav.tsx";
import AboutHero from "@/pages/about/AboutHero.tsx";
import SectionAfterHero from "@/pages/about/SectionAfterHero.tsx";
import ActionPurpose from "@/pages/about/ActionPurpose.tsx";
import GlobalReach from "@/pages/about/GlobalReach.tsx";
import OurLeader from "@/pages/about/OurLeader.tsx";
import Technologies from "@/pages/about/Technologies.tsx";

const AboutMain = () => {
    return (
        <div className="flex flex-col">
            <SmallAboutNav/>
            <AboutHero/>
            <Container>
                <SectionAfterHero/>
                <ActionPurpose/>
                <GlobalReach/>
                <OurLeader/>
                <Technologies/>
            </Container>
        </div>
    );
};

export default AboutMain;
