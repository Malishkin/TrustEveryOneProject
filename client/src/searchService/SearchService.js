import React, { useState, useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import { useHistory } from 'react-router';
import axios from 'axios';
import ServiceItem from '../items/ServiceItem';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SearchService = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredService, setFilteredService] = useState([]);
  const history = useHistory();

  const alertContext = useContext(AlertContext);

  const onChange = (e) => setSearchText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      async function fetchData() {
        let serviceResponse = await axios.get(
          '/api/services?searchText=' + searchText
        );

        let serviceList = serviceResponse.data;

        if (serviceList.length === 0) {
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
              title: 'No results, do you want to share the service you search?',
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

        if (serviceList.length > 9) {
          alertContext.setAlert(
            'There are ' +
              serviceList.length +
              ' results, we need more details',
            'primary'
          );
        } else {
          setFilteredService(serviceList);
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
          placeholder='Search Service...'
          value={searchText}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search Service'
          className='btn btn-dark btn-block'
        />
      </form>
      ;
      {filteredService.map((item) => {
        return <ServiceItem key={item._id} serviceData={item} />;
      })}
    </div>
  );
};

export default SearchService;
