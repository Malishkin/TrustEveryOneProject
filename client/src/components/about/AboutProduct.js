import { useParams } from 'react-router-dom';
import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export const AboutProduct = (props) => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function fetchData() {
      let resp = await axios.get('/api/products/' + params.id);
      setProduct(resp.data);
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <Link to='/getinformation' className='btn btn-light'>
        Back To Get Information
      </Link>
      <div className='card grid-2'>
        {product.name && <strong>Name: {product.name}</strong>} <br />
        {product.brand && <strong>Brand: {product.brand} </strong>}
        <br />
        {product.model && (
          <Fragment>
            <strong> Model: {product.model}</strong> <br />
          </Fragment>
        )}
        {product.manufacturer && (
          <Fragment>
            <strong>Manufacturer: {product.manufacturer}</strong>
            <br />
          </Fragment>
        )}
        {product.country && (
          <Fragment>
            <strong>Country: {product.country}</strong>
            <br />
          </Fragment>
        )}
      </div>

      <div className='card grid-2'>
        {product.functionality && (
          <Fragment>
            <strong> {product.functionality}</strong>
          </Fragment>
        )}
      </div>
      <div className='card grid-2'>
        {product.efficiency && (
          <Fragment>
            <strong>Efficiency: {product.efficiency} </strong>
            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={product.efficiency}
              step='1'
            />
          </Fragment>
        )}
      </div>
      <div className='card grid-2'>
        {product.reliability && (
          <Fragment>
            <strong>Reliability: {product.reliability} </strong>
            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={product.reliability}
              step='1'
            />
          </Fragment>
        )}
      </div>

      <div className='card grid-2'>
        {product.convenience && (
          <Fragment>
            <strong>Convenience: {product.convenience} </strong>

            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={product.convenience}
              step='1'
            />
          </Fragment>
        )}
      </div>
      <div className='card grid-2'>
        {product.trust_degree && (
          <Fragment>
            <strong>Trust Degree: {product.trust_degree} </strong>
            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={product.trust_degree}
              step='1'
            />
          </Fragment>
        )}
      </div>
      <div className='card grid-2'>
        {product.expected_value && (
          <Fragment>
            <strong>Trust Degree: {product.expected_value} </strong>
            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={product.expected_value}
              step='1'
            />
          </Fragment>
        )}
      </div>
      <div className='card grid-2'>
        {product.additional_info ? (
          <Fragment>
            <strong> Additional Info: {product.additional_info}</strong>
          </Fragment>
        ): <strong> No Additional Info...</strong>}
      </div>
    </Fragment>
  );
};
