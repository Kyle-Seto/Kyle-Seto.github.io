import React from 'react'
import { homeObjTwo} from './Data'
import { InfoSection } from '../../components';

const About = () => {
    return (
        <>         
        <InfoSection {...homeObjTwo} />                    
        </>
    )
};

export default About;
