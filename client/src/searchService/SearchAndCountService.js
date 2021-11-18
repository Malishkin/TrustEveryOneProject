import React, { useState, useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import axios from 'axios';
import ServiceItem from '../items/ServiceItem';


const SearchAndCountService = () =>
{
  const [text, setText] = useState('');
  const [servicesCount, setServicesCount] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);

  const alertContext = useContext(AlertContext);

  const onSubmit = (e) =>
  {
    e.preventDefault();
    console.log('searh value: ', e.target.value);
    setText(e.target.value);

    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      async function fetchData ()
      {
        let response = await axios.get('/api/services?countForText=' + text);

        if (response.length === 0) {
          alertContext.setAlert('No results...', 'danger');
        }

        setServicesCount(response.data);
        if (servicesCount <= 7 && servicesCount > 0) {
          let resp = await axios.get('/api/services/' + servicesCount._id);
          setFilteredServices(resp.data);
        }
     
      }
      fetchData();
    }
  };
  const showFiltered = async () =>
  {
  //persons by text
   console.log('servicesCount '+ servicesCount)
    console.log('filteredServices: ' + filteredServices)

}
  return (
    <div>
      <form onSubmit={onSubmit} className='form-inline'>
        <input
          type='text'
          name='text'
          placeholder='Type in and press Enter...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {/* <input
          type='submit'
          value='Search3'
          className='btn btn-dark btn-block'
        /> */}
      </form>

      <h4>Found services: {servicesCount}</h4>
      {servicesCount <= 7 && servicesCount > 0 && <button className='btn btn-dark' onClick={showFiltered} >Show</button>}
      {servicesCount > 7 && <button className='btn btn-primary' >Advanced Search...</button>}
    </div>
  );
};

export default SearchAndCountService;
