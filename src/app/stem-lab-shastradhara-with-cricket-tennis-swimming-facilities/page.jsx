
import PageTitle from '@/components/pages/PageTitle'
import STEMLabShastradharawithCricketTennisSwimmingFacilities from '@/components/pages/STEMLabShastradharawithCricketTennisSwimmingFacilities'
import React from 'react'

export const metadata = {
  title: "STEM Lab Shastradhara with Cricket Tennis Swimming facilities",
  description: "GMA International School offers a state-of-the-art STEM Lab Shastradhara with Cricket Tennis Swimming facilities for cricket, tennis, and swimming, ensuring holistic growth.",
  keywords: ["Best schools in Dehradun", "Top schools Dehradun", "Education in Dehradun"], 
  alternates: {
    canonical: "https://gmainternationalschool.com/best-schools-in-dehradun", 
  },
}


const Page = () => {

    return (
        <>
            <PageTitle  title='STEM Lab Shastradhara with Cricket Tennis Swimming Facilities' />
            <STEMLabShastradharawithCricketTennisSwimmingFacilities />
        </>
    )
}

export default Page