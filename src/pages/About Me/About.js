import React from 'react'
import { homeObjTwo, homeObjThree} from './Data'
import { InfoSection, Projects } from '../../components';

const Home = () => {
    return (
        <>         
        <InfoSection {...homeObjTwo} />   
        <Projects />          
        <InfoSection {...homeObjThree} />             
        </>
    )
};

export default Home;
