import React from 'react'
import Layout from '../components/Layout'
import ProjectPart from '../components/Project/ProjectPart'

const Portfolio = () => {
  return (
    <Layout title="Portfolio">
        <div style={{"textAlign": "center", "fontSize": "25px"}} className="main-text">
            <p>At the moment, I have only study assignments as projects:</p>
        </div>
        <div className="main-text">
            <ProjectPart></ProjectPart>
        </div>
    </Layout>
  )
}

export default Portfolio