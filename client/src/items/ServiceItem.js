import React from 'react';

import { useHistory } from 'react-router';

import { Link } from 'react-router-dom';

const ServiceItem = (props) =>
{
  const history = useHistory();
  const about = () =>
  {
    history.push('/aboutservice/' + props.serviceData._id)
  }
  return (
    <div className='card text-center'>
          <h3>  {props.serviceData.name} </h3>
          <h3> {props.serviceData.location} </h3>
          <h3> {props.serviceData.type_of_service} </h3>
          <div>
          <button  className="btn btn-dark btn-sm my-1" onClick={about}>More</button>
          </div>
    </div>
  );
};

export default ServiceItem;