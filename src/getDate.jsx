import React from 'react';
import { useParams } from 'react-router-dom';
import GetByDate from './getByDate';

export default function GetDate(props) {
    const params = useParams(); // Unpacking and retrieve id
    console.log(params);
    return (
        <GetByDate date={params.date}/>
    )
}