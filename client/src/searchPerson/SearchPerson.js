import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import AlertContext from '../context/alert/alertContext';
import axios from 'axios';
import PersonItem from '../items/PersonItem';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SearchPerson = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredPersons, setFilteredPersons] = useState([]);

  const history = useHistory();

  const alertContext = useContext(AlertContext);

  const onChange = (e) => setSearchText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      async function fetchData() {
        let personsResponse = await axios.get(
          '/api/persons?searchText=' + searchText
        );

        // let perSearch = await resp.data.filter(
        //   (x) =>
        //     x.firstName
        //       .trim()
        //       .toLowerCase()
        //       .includes(searchText.trim().toLowerCase()) ||
        //     x.lastName.trim().toLowerCase().trim().includes(searchText.toLowerCase())
        // );

        let personsList = personsResponse.data;

        if (personsList.length === 0) {
          // alertContext.setAlert('No results...', 'danger');
          const MySwal = withReactContent(Swal);

          const swalWithBootstrapButtons = MySwal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger',
            },
            buttonsStyling: false,
          });

          swalWithBootstrapButtons
            .fire({
              title: 'No results, do you want to share the person you search?',
              // text: "You will get the token for shearing!",
              icon: 'info',
              showCancelButton: true,
              confirmButtonText: 'Yes, I want!',
              cancelButtonText: 'No, cancel!',
              reverseButtons: true,
            })
            .then((result) => {
              if (result.isConfirmed) {
                history.push('/shareinformation');
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire(
                  'Cancelled',
                  // 'Your imaginary file is safe :)',
                  // 'error'
                  'Thank you'
                );
              }
            });
        }

        if (personsList.length > 9) {
          alertContext.setAlert(
            'There are ' +
              personsList.length +
              ' results, we need more details',
            'primary'
          );
        } else {
          setFilteredPersons(personsList);
        }
      }
      fetchData();
      setSearchText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Person...'
          value={searchText}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search Person'
          className='btn btn-dark btn-block'
        />
      </form>

      {filteredPersons.map((item) => {
        return <PersonItem key={item._id} personData={item} />;
      })}
    </div>
  );
};

export default SearchPerson;
