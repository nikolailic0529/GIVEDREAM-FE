import styled from "styled-components";

import HeroSection from "@/src/components/pages/home/sections/HeroSection";
import FeaturesSection from "@/src/components/pages/home/sections/FeaturesSection";
import BlocksSection from "@/src/components/pages/home/sections/BlocksSection";
import RewardsSection from "@/src/components/pages/home/sections/RewardsSection";
import StatsSection from "@/src/components/pages/home/sections/StatsSection";
import RoadmapSection from "@/src/components/pages/home/sections/RoadmapSection";
import Header from "@/src/components/pages/home/Header";
import Footer from "@/src/components/common/Footer";




export default function Home() {
    return (

        <div>
            <Header/>
            <div>
                <HeroSection/>
                <div className="container mx-auto">
                    <FeaturesSection/>
                    <BlocksSection/>
                    <RewardsSection/>
                </div>
                <StatsSection/>
                <RoadmapSection/>
            </div>
            <Footer/>
        </div>
    )
}
