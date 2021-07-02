import React from 'react';
import AboutSection from '../../AboutSection';
import Godparents from '../../Godparents';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';
import MilestoneCards from '../../MilestoneCards';
import ThankYou from '../../ThankYou';

function Home() {
    return (
        <>
            {/* INTRO */}
            <AboutSection {...homeObjOne} />
            {/* MILESTONES */}
            <MilestoneCards />
            {/* GODPARENTS */}
            <Godparents />
            {/* THANKS */}
            <ThankYou />
        </>
    )
}

export default Home
