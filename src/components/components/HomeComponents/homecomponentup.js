import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeComponentUp(props){
    return(
        <div className={`HomeComponent Up`}>
            <Link to={props.to} className="TitleLink">
                <h2 className={`TitleUp Title ${props.color}`}>
                    {props.title}
                </h2>
            </Link>
            <div className="Content ContentUp">
                <h4>{props.content}</h4>
            </div>
        </div>
    )
}