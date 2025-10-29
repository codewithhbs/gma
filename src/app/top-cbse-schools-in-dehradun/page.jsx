import PageTitle from "@/components/pages/PageTitle"
import TopCBSESchoolsInDehradun from "@/components/pages/TopCBSESchoolsInDehradun"


export const metadata = {
  title: "Top CBSE Schools in Dehradun - GMA International School",
  description: "GMA International School is leading the top CBSE Schools in Dehradun, focusing on academic excellence, character development, and global readiness.",
  keywords: ["Top CBSE Schools in Dehradun, est schools in Dehradun", "Top schools Dehradun", "Education in Dehradun"], 
  alternates: {
    canonical: "https://gmainternationalschool.com/top-cbse-schools-in-dehradun", 
  },
}


const page = () => {
  return (
    <>
    <PageTitle title="Top CBSES chools In Dehradun"/>
    <TopCBSESchoolsInDehradun/>

    </>
  )
}

export default page