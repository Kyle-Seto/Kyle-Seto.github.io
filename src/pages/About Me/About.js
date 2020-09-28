import React from 'react'
import { homeObjTwo, homeObjThree} from './Data'
import { InfoSection } from '../../components';

const Home = () => {
    return (
        <>         
        <InfoSection {...homeObjTwo} />             
        <InfoSection {...homeObjThree} />             
        </>
    )
};

export default Home;
