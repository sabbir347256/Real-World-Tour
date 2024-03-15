import PropTypes from 'prop-types'
import './Country.css'
import { useState } from 'react';
const Country = ({ country,handleVisitedCountry,handleVisitedFlag} ) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleVisite = () => {
        setVisited(!visited);
    }
    console.log(country)
    return (
        <div className={visited ?'visited' : 'country'}>
            <h3>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p className='text-black'>Area : {area}</p>
            <p>Code : {cca3}</p>
            <button style={{marginBottom:10}} onClick={() => handleVisitedCountry(country)}>Mark as Visited</button>
            <br />
            <button onClick={() =>handleVisitedFlag(country.flags.png)}>Add Flag</button>
            <br />
            <button style={{marginBottom : 10}} onClick={handleVisite}>{visited ? 'Visited' : 'Going'}</button>
            <div>
                {
                    visited ? 'All ready this country visited' : 'I will going this country'
                }
            </div>
            <hr />
        </div>
    );
};
Country.propTypes = {
    handleVisitedCountry :PropTypes.func.isRequired,
    country: PropTypes.object.isRequired,
    handleVisitedFlag :PropTypes.func.isRequired
}
export default Country;