import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitCountries,setVisitCountries] = useState([]);
    const [visitedFlags,setVisitedFlags] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedFlag =(flag) =>{
        const newVisitedFlag = [...visitedFlags,flag];
        setVisitedFlags(newVisitedFlag);
    }

    const handleVisitedCountry = c =>{
        const newVisitedCountry = [...visitCountries,c];
        setVisitCountries(newVisitedCountry);
    }

    return (
        <div>
            <h3>Countries :{countries.length}</h3>
            <div>
                <h3>Visited Countries : {visitCountries.length}</h3>
                <ul>
                    {
                        visitCountries.map(country => <li key={country.cca3}>
                            {country.name.common}
                        </li>)
                    }
                </ul>
            </div>
            <div>
                {
                    visitedFlags.map((flag,idx) =><img key={idx} src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        handleVisitedCountry ={handleVisitedCountry}
                        handleVisitedFlag ={handleVisitedFlag}
                        key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;