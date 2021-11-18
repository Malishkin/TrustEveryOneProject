import React, { useState, useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import { useHistory } from 'react-router';
import axios from 'axios';
import CompanyItem from '../items/CompanyItem';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SearchCompany = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  const history = useHistory();
  const alertContext = useContext(AlertContext);

  const onChange = (e) => setSearchText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      async function fetchData() {
        let companiesResponse = await axios.get(
          '/api/companies?searchText=' + searchText
        );

        let companiesList = companiesResponse.data;

        if (companiesList.length === 0) {
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
              title: 'No results, do you want to share the company you search?',
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

        if (companiesList.length > 9) {
          alertContext.setAlert(
            'There are ' +
              companiesList.length +
              ' results, we need more details',
            'primary'
          );
        } else {
          setFilteredCompanies(companiesList);
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
          placeholder='Search Company...'
          value={searchText}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search Company'
          className='btn btn-dark btn-block'
        />
      </form>
      ;
      {filteredCompanies.map((item) => {
        return <CompanyItem key={item._id} companyData={item} />;
      })}
    </div>
  );
};

export default SearchCompany;
