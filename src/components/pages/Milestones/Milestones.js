import React from 'react';
import AboutSection from '../../AboutSection';
import Godparents from '../../Godparents';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';

function Home() {
    return (
        <>
            <AboutSection {...homeObjThree} />
            <AboutSection {...homeObjOne} />
            <Godparents />
            <AboutSection {...homeObjFour} />
        </>
    )
}

export default Home
