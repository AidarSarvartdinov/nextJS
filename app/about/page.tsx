import React from 'react'
import Layout from '../components/Layout'
import AboutTextPart from '../components/AboutTextPart/AboutTextPart'
import AboutImgPart from '../components/AboutImgPart/AboutImgPart'

const About = () => {
  return (
    <Layout title="About Me">
        <main>
            <div className="heading"><h1>About Me</h1></div>
            <div style={{"display":"flex"}}>
                <AboutTextPart></AboutTextPart>
                <AboutImgPart></AboutImgPart>
            </div>
        </main>
    </Layout>
  )
}

export default About