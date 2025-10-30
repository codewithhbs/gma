'use client'
import AboutUs from "@/components/home-component/AboutUs";
import CardFacility from "@/components/home-component/CardFacility";
import ContactArea from "@/components/home-component/ContactArea";
import DirectorMessage from "@/components/home-component/DirectorMessage";
import Gallery from "@/components/home-component/Gallery";
import HeroSlider from "@/components/home-component/HeroSlider";
import Team from "@/components/home-component/Team";
import WhyChooseGma from "@/components/home-component/WhyChooseGma";
import ParentTestimonials from "@/components/home-component/ParentTestimonials";
import PrincipalMessage from "@/components/home-component/PrincipalMessage";
import React from "react";

export default function Page() {
  return (
    <>
      <HeroSlider /> 
      <DirectorMessage />
      <PrincipalMessage />
      <CardFacility />
      <AboutUs />
      <WhyChooseGma />
      <ParentTestimonials />
      <ContactArea />
      <Gallery />
      <Team />
      
    </>
  );
}