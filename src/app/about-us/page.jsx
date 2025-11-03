import React from "react";
import DirectorMessage from "@/components/home-component/DirectorMessage";
import SubpageBanner from "@/components/layouts/SubpageBanner";
import PrincipalMessage from "@/components/home-component/PrincipalMessage";
import VisionMission from  "../our-mission-vision/page"
import Aboutcompo from  "./aboutcom"
<SubpageBanner title="About Us" backgroundImage="images/bg.png" />



function AboutPage() {
  return (

    
    <div className="pt-[150px] lg:pt-[210px]">
      
      <SubpageBanner
        title="About Us"/>

      <main className="container mx-auto px-4 py-16">
        <Aboutcompo />
        <DirectorMessage />
        <PrincipalMessage />
        <VisionMission />
      </main>
    </div>
  );
}

export default AboutPage;