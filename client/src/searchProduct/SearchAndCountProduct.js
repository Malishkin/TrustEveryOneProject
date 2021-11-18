import React, { useState, useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import axios from 'axios';
import ProductItem from '../items/ProductItem';


const SearchAndCountProduct = () =>
{
  const [text, setText] = useState('');
  const [productsCount, setProductsCount] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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
        let response = await axios.get('/api/products?countForText=' + text);

        if (response.length === 0) {
          alertContext.setAlert('No results...', 'danger');
        }

        setProductsCount(response.data);
        if (productsCount <= 7 && productsCount > 0) {
          let resp = await axios.get('/api/products/' + productsCount._id);
          setFilteredProducts(resp.data);
        }
     
      }
      fetchData();
    }
  };
  const showFiltered = async () =>
  {
  //persons by text
   console.log('productsCount '+ productsCount)
    console.log('filteredProducts: ' + filteredProducts)

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

      <h4>Found products: {productsCount}</h4>
      {productsCount <= 7 && productsCount > 0 && <button className='btn btn-dark' onClick={showFiltered} >Show</button>}
      {productsCount > 7 && <button className='btn btn-primary' >Advanced Search...</button>}
    </div>
  );
};

export default SearchAndCountProduct;
