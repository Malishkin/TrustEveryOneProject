import React, { useState, useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import axios from 'axios';
import CompanyItem from '../items/CompanyItem';


const SearchAndCountCompanies = () =>
{
  const [text, setText] = useState('');
  const [companiesCount, setCompaniesCount] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

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
        let response = await axios.get('/api/companies?countForText=' + text);

        if (response.length === 0) {
          alertContext.setAlert('No results...', 'danger');
        }

        setCompaniesCount(response.data);
        if (companiesCount <= 7 && companiesCount > 0) {
          let resp = await axios.get('/api/companies/' + companiesCount._id);
          setFilteredCompanies(resp.data);
        }
     
      }
      fetchData();
    }
  };
  const showFiltered = async () =>
  {
  //persons by text
   console.log('companiesCount '+ companiesCount)
    console.log('filteredCompanies: ' + filteredCompanies)

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

      <h4>Found companies: {companiesCount}</h4>
      {companiesCount <= 7 && companiesCount > 0 && <button className='btn btn-dark' onClick={showFiltered} >Show</button>}
      {companiesCount > 7 && <button className='btn btn-primary' >Advanced Search...</button>}
    </div>
  );
};

export default SearchAndCountCompanies;
