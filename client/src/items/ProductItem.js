import React from 'react';

import { useHistory } from 'react-router';

const ProductItem = (props) =>
{
  const history = useHistory();
  const about = () =>
  {
    history.push('/aboutproduct/' + props.productData._id)
  }
  return (
    <div className='card text-center'>
          <h3>  {props.productData.name} </h3>
      <h3> {props.productData.brand} </h3>
      <h3> {props.productData.manufacturer} </h3>
      <h3> {props.productData.functionality} </h3>
          <div>
          <button  className="btn btn-dark btn-sm my-1" onClick={about}>More</button>
          </div>
    </div>
  );
};

export default ProductItem;