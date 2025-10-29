import PageTitle from "@/components/pages/PageTitle"
import SeniorSecondarySchoolinDehradun from "@/components/pages/SeniorSecondarySchoolinDehradun"

export const metadata = {
  title: "Top Senior Secondary School in Dehradun - GMA International",
  description: "GMA International School Top Senior Secondary School in Dehradun offers a comprehensive Senior Secondary education with expert faculty, modern facilities, and a focus on overall development.",
  keywords: ["Top CBSE Schools in Dehradun, est schools in Dehradun", "Top schools Dehradun", "Education in Dehradun"], 
  alternates: {
    canonical: "https://gmainternationalschool.com/top-cbse-schools-in-dehradun", 
  },
}

const Page = () => {
  return (
    <>
      <PageTitle title="Senior Secondary School in Dehradun" />
      <SeniorSecondarySchoolinDehradun />
    </>
  )
}

export default Page