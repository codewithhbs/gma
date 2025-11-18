
import PageTitle from '@/components/pages/PageTitle'
import SchoolInDehradun from '@/components/pages/SchoolInDehradun'
import React from 'react'

export const metadata = {
  title: "Best Schools in Dehradun - GMA International School",
  description: "GMA International School, one of the best school in Dehradun offering world-class education, excellent facilities, and a nurturing environment for students.",
  keywords: ["Best schools in Dehradun", "Top schools Dehradun", "Education in Dehradun"], 
  alternates: {
    canonical: "https://gmainternationalschool.com/best-schools-in-dehradun", 
  },
}


const Page = () => {

    return (
        <>
            <PageTitle  title='School In Dehradun' />
            <SchoolInDehradun />
        </>
    )
}

export default Page