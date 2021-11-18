import React, { useState, useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import axios from 'axios';
import PersonItem from '../items/PersonItem';


const AdvancedSearchPerson = () => {
  const [text, setText] = useState('');
  const [filteredPersons, setFilteredPersons] = useState([]);

  const alertContext = useContext(AlertContext);

  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      async function fetchData() {
        let resp = await axios.get('/api/persons');

        let perSearch = await resp.data.filter(
          (x) =>
            x.firstName.toLowerCase().includes(text.toLowerCase()) &&
            x.lastName.toLowerCase().includes(text.toLowerCase())
        );

        if (perSearch.length === 0) {
          alertContext.setAlert('No results...', 'danger');
        }

        if (perSearch.length > 5) {
          alertContext.setAlert(
            'There are ' + perSearch.length + ' results, you need advanced search',
            'primary'
          );
          
        } else {
          setFilteredPersons(perSearch);
        }
      }
      fetchData();
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Person...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Advanced Search Person'
          className='btn btn-primary btn-block'
        />
      </form>

      {filteredPersons.map((item) => {
        return <PersonItem key={item._id} personData={item} />;
      })}

          
      
    </div>
  );
};

export default AdvancedSearchPerson;
