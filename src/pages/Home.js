import React from 'react'
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import WhoWeAre from '../components/home/WhoWeAre';
import WhyUs from '../components/home/WhyUs';
import OurBenefits from '../components/home/OurBenefits';
import Testimonials from '../components/testimonials/Testimonials';


function Home() {
    return(
        <div className="home">

            <Hero />
            <Services />
            <WhoWeAre />
            <WhyUs />
            <Testimonials />
            <OurBenefits />
            
        </div>
    )
}

export default Home;