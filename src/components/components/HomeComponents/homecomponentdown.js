import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeComponentDown(props){
    return(
        <div className={`HomeComponent Down`}>
            <div className="Content ContentDown">
                <h4>{props.content}</h4>
            </div>
            <Link to={props.to} className='TitleLink' >
                <h2 className={`TitleDown Title ${props.color}`}>
                    {props.title}
                </h2>
            </Link>
        </div>
    )
}