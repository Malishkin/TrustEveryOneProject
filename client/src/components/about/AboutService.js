import { useParams } from 'react-router-dom';
import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export const AboutService = (props) => {
  const [service, setService] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function fetchData() {
      let resp = await axios.get('/api/services/' + params.id);
      setService(resp.data);
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <Link to='/getinformation' className='btn btn-light'>
        Back To Get Information
      </Link>
      <div className='card grid-2'>
        {service.name && (
          <Fragment>
            <strong>Name: {service.name}</strong>
            <br />
          </Fragment>
        )}
        {service.location && (
          <Fragment>
            <strong> Location: {service.location} </strong>
            <br />
          </Fragment>
        )}

        {service.supplier && (
          <Fragment>
            <strong> Supplier: {service.supplier}</strong>
            <br />
            <br />
          </Fragment>
        )}
      </div>

      <div className='card grid-2'>
        {service.type_of_service && (
          <Fragment>
            <strong> Type of Service: {service.type_of_service}</strong>
          </Fragment>
        )}
      </div>

      <div className='card grid-2'>
        {service.communicativeness && (
          <Fragment>
            <strong>Communicativeness: {service.communicativeness} </strong>
            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={service.communicativeness}
              step='1'
            />
          </Fragment>
        )}
      </div>
      <div className='card grid-2'>
        {service.professionalism && (
          <Fragment>
            <strong>Professionalism: {service.professionalism} </strong>
            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={service.professionalism}
              step='1'
            />
          </Fragment>
        )}
      </div>

      <div className='card grid-2'>
        {service.execution_of_obligations && (
          <Fragment>
            <strong>
              Execution of obligations: {service.execution_of_obligations}{' '}
            </strong>

            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={service.execution_of_obligations}
              step='1'
            />
          </Fragment>
        )}
      </div>
      <div className='card grid-2'>
        {service.trust_degree && (
          <Fragment>
            <strong>Trust Degree: {service.trust_degree} </strong>
            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={service.trust_degree}
              step='1'
            />
          </Fragment>
        )}
      </div>
      <div className='card grid-2'>
        {service.expected_value && (
          <Fragment>
            <strong>Expected Value: {service.expected_value} </strong>
            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={service.expected_value}
              step='1'
            />
          </Fragment>
        )}
      </div>

      <div className='card grid-2'>
        {service.additional_info ? (
          <Fragment>
            <strong> Additional Info: {service.additional_info}</strong>
          </Fragment>
        ): <strong> No Additional Info...</strong>}
      </div>
    </Fragment>
  );
};
