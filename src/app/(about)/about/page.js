import React from 'react'
import AboutCoverSection from '@/src/components/About/AboutCoverSection'
import Skills from '@/src/components/About/Skills'
import Link from 'next/link'

export const metadata = {
  title: "About me",
  description: `Here are some details about myself.`
};

const page = () => {
  return (
    <>
    <AboutCoverSection/>
    <Skills/>
    <h2 className='mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal'>
    Have a project in mind? Reach out to me 📞 from <Link className='!underline underline-offset-2' href="/contact">here</Link> and let's make it happen.
    </h2>
    </>
  )
}

export default page