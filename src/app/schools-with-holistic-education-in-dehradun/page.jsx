import PageTitle from "@/components/pages/PageTitle"
import SchoolswithHolisticEducationinDehradun from "@/components/pages/SchoolswithHolisticEducationinDehradun"


export const metadata = {
  title: "Top Schools with Holistic Education in Dehradun - GMA School",
  description: "GMA International School is leading Schools with Holistic Education in Dehradun, blending academics, sports, and character development for well-rounded student growth.",
  keywords: ["Top CBSE Schools in Dehradun, est schools in Dehradun", "Top schools Dehradun", "Education in Dehradun"], 
  alternates: {
    canonical: "https://gmainternationalschool.com/top-cbse-schools-in-dehradun", 
  },
}


const page = () => {
  return (
    <>
    <PageTitle title="Top CBSES chools In Dehradun"/>
    <SchoolswithHolisticEducationinDehradun />

    </>
  )
}

export default page