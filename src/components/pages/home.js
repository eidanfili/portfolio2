import React from 'react';
import HomeComponentDown from '../components/HomeComponents/homecomponentdown';
import HomeComponentUp from '../components/HomeComponents/homecomponentup';

export default function Home(){
    return(
        <div className="Home PageGrid">
            <div className="PageTitle White BlackT">
                <h1>E</h1>
                <h1>F</h1>
                <h1>L</h1>
            </div>
            <div className="HomeComponents">
                <HomeComponentDown to="/about" title="About" color="Pink" content="This page is about me and learning to code and other things about me" />
                <HomeComponentUp to="/projects" title="Projects" color="Green" content="asdfasdfasdfasdf" />
                <HomeComponentDown to="/portfolio" title="Portfolio" color="Indigo" content="asdfasdfasdfasdf" />
                <HomeComponentUp to="/contact" title="Contact" color="Red" content="adsfasdfasdfasdf" />
            </div>
        </div>
    )
}