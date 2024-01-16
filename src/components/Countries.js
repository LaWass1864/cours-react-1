import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

const Countries = () => {
    //  cette variable c'est comme si elle est stockée dans cette data, il faut la déclarer comme ca. C'est comme ca qu'on fait des variables
    const [data, setData] = useState([]);
    const [hello, setHello] = useState("Hello you")
    //  Le useEffect se joue lorsque rapidement , il fait cloisonné les choses. C'est des Hook
useEffect(() => {
 axios
    .get("https://restcountries.com/v3.1/all")
    .then((res) => setData(res.data));
}, []);

    return (
        <div className='countries'>
            <h1>Countries</h1>
            <ul>

                {data.map((country) => <li>
                    {country.translations.fra.common}
                </li>)}
                </ul>  
   
        </div>
    );
};

export default Countries;