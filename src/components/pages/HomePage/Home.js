import React from 'react';
import AboutSection from '../../AboutSection';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';

function Home() {
    return (
        <>
            <AboutSection {...homeObjOne} />
            <AboutSection {...homeObjThree} />
            <AboutSection {...homeObjTwo} />
            <AboutSection {...homeObjFour} />
        </>
    )
}

export default Home
