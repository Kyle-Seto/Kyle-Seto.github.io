import React from 'react'
import { homeObjTwo, homeObjThree} from './Data'
import { InfoSection } from '../../components';

const About = () => {
    return (
        <>         
        <InfoSection {...homeObjTwo} />             
        <InfoSection {...homeObjThree} />             
        </>
    )
};

export default About;
