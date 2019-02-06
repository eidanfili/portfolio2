import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeComponentUp(props){
    return(
        <div className={`HomeComponent Up`}>
            <Link to={props.to} className="TitleLink">
                <h2 className={`Title ${props.color}`}>
                    {props.title}
                </h2>
            </Link>
            <div className="Content">
                <h4>{props.content}</h4>
            </div>
        </div>
    )
}