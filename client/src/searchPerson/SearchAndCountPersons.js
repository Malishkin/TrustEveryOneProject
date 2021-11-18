import React, { useState, useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import axios from 'axios';
import PersonItem from '../items/PersonItem';

const SearchAndCountPersons = () =>
// const SearchAndCountPersons = ({ updateCountPersons }) =>
{
  const [text, setText] = useState('');
  const [personsCount, setPersonsCount] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);

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
        let response = await axios.get('/api/persons?countForText=' + text);
        setPersonsCount(response.data);

        // if (response.length === 0) {
        //   alertContext.setAlert('No results...', 'danger');
        // }
        // else {
        //   setPersonsCount(response.data);
        //   // updateCountPersons(response.data);

        //   if (personsCount <= 7 && personsCount > 0) {
        //     let resp = await axios.get('/api/persons/person/searchText='+text);
        //     setFilteredPersons(resp.data);
        //   }
        // }
      }
      fetchData();
    }
  };
  const showFiltered = async () =>
  {
  //persons by text
   console.log('personsCount '+ personsCount)
    console.log('filteredPersons: ' + filteredPersons)

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

      <h4>Found persons: {personsCount}</h4>
      {personsCount <= 7 && personsCount > 0 && <button className='btn btn-dark' onClick={showFiltered} >Show...</button>}
      {personsCount > 7 && <button className='btn btn-primary' >Advanced Search...</button>}
    </div>
  );
};

export default SearchAndCountPersons;
