import PropTypes from 'prop-types'
import './Country.css'
const Country = ({country}) => {
    const{name,flags} =country;
    console.log(country)
    return (
        <div className='country'>
            <h3>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};
Country.propTypes ={
    country: PropTypes.object.isRequired
}
export default Country;