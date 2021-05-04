import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree} from './Data'
import { InfoSection, Project } from '../../components';

const Home = () => {
    return (
        <>
        <InfoSection {...homeObjOne} />
        <Project />               
        <InfoSection {...homeObjTwo} />           
        <InfoSection {...homeObjThree} />             
        </>
    )
};

export default Home;
