import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import AlertContext from '../context/alert/alertContext';
import axios from 'axios';
import ProductItem from '../items/ProductItem';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SearchProduct = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const history = useHistory();

  const alertContext = useContext(AlertContext);

  const onChange = (e) => setSearchText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      async function fetchData() {
        let productsResponse = await axios.get(
          '/api/products?searchText=' + searchText
        );

        let productsList = productsResponse.data;

        if (productsList.length === 0) {
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
              title: 'No results, do you want to share the product you search?',
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

        if (productsList.length > 9) {
          alertContext.setAlert(
            'There are ' +
              productsList.length +
              ' results, we need more details',
            'primary'
          );
        } else {
          setFilteredProducts(productsList);
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
          placeholder='Search Product...'
          value={searchText}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search Product'
          className='btn btn-dark btn-block'
        />
      </form>
      ;
      {filteredProducts.map((item) => {
        return <ProductItem key={item._id} productData={item} />;
      })}
    </div>
  );
};

export default SearchProduct;
