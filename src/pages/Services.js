import React from 'react'
import ServiceHero from '../components/services/ServiceHero';
import ServicesSection from '../components/services/ServicesSection';
import FivePage from '../components/services/FivePage';
import Portfolio from '../components/services/Portfolio';
import Pricing from '../components/services/Pricing';

function Services(){
    return(
        <div className='services'>
            <ServiceHero />
            <ServicesSection />
            <Pricing />
            <FivePage />
            <Portfolio />
        </div>
    )
}
export default Services;