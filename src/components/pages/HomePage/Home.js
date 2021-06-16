import React from 'react';
import AboutSection from '../../AboutSection';
import {homeObjOne} from './Data';

function Home() {
    return (
        <>
            <AboutSection {...homeObjOne} />
        </>
    )
}

export default Home
