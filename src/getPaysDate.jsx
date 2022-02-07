import React from 'react';
import { useParams } from 'react-router-dom';
import GetByCountryByDate from './getByCountryByDate';

export default function GetPaysDate(props) {
    const params = useParams(); // Unpacking and retrieve id
    console.log(params);
    return (
        <GetByCountryByDate country={params.pays[0].toUpperCase() + params.pays.slice(1).toLowerCase()} date={params.date}/>
    )
}