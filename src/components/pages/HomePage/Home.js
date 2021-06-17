import React from 'react';
import AboutSection from '../../AboutSection';
import Godparents from '../../Godparents';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';

function Home() {
    return (
        <>
            {/* INTRO */}
            <AboutSection {...homeObjOne} />
            {/* MILESTONES */}
            <AboutSection {...homeObjThree} />
            {/* BAPTISM */}
            {/* still need to develop baptism component */}
            {/* GODPARENTS */}
            <Godparents />
            {/* THANKS */}
            <AboutSection {...homeObjFour} />
        </>
    )
}

export default Home
