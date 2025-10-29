import React from "react";
import DirectorMessage from "@/components/home-component/DirectorMessage";
import SubpageBanner from "@/components/layouts/SubpageBanner";
<SubpageBanner title="About Us" backgroundImage="images/bg.png" />


function AboutPage() {
  return (

    
    <div className="pt-[150px] lg:pt-[210px]">
      
      <SubpageBanner
        title="About Us"/>

      <main className="container mx-auto px-4 py-16">
        <DirectorMessage />
      </main>
    </div>
  );
}

export default AboutPage;