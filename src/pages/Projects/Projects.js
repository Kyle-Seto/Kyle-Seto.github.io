import React from 'react'
import { homeObjThree} from './Data'
import { InfoSection, Projects} from '../../components';

const Home = () => {
    return (
        <>
        <Projects />
        <InfoSection {...homeObjThree} />
        </>
    )
};

export default Home;
