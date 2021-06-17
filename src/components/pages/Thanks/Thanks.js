import React from 'react';
import AboutSection from '../../AboutSection';
import Godparents from '../../Godparents';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';

function Home() {
    return (
        <>
            <AboutSection {...homeObjFour} />
            <AboutSection {...homeObjOne} />
            <AboutSection {...homeObjThree} />
            <Godparents />
        </>
    )
}

export default Home
