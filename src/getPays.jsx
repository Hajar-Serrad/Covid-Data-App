import React from 'react';
import { useParams } from 'react-router-dom';
import GetByCountry from './getByCountry';

export default function GetPays(props) {
    const params = useParams(); // Unpacking and retrieve id
    console.log(params);
    return (
        <GetByCountry pays={params.pays[0].toUpperCase() + params.pays.slice(1).toLowerCase()}/>
    )
}