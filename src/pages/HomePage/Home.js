import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree} from './Data'
import { InfoSection, Pricing } from '../../components';

const Home = () => {
    return (
        <>
        <InfoSection {...homeObjOne} />
        <Pricing />               
        <InfoSection {...homeObjTwo} />           
        <InfoSection {...homeObjThree} />             
        </>
    )
};

export default Home;
