import React from 'react';
import AboutSection from '../../AboutSection';
import Godparents from '../../Godparents';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Home() {
    return (
        <>
            {/* GODPARENTS */}
            <Godparents />
            {/* INTRO */}
            <AboutSection {...homeObjOne} />
            {/* MILESTONES */}
            <AboutSection {...homeObjThree} />
            {/* THANKS */}
            <AboutSection {...homeObjFour} />
        </>
    )
}

export default Home
