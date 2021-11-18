import { useParams } from 'react-router-dom';
import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export const AboutCompany = (props) => {
  const [company, setCompany] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function fetchData() {
      let resp = await axios.get('/api/companies/' + params.id);
      setCompany(resp.data);
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <Link to='/getinformation' className='btn btn-light'>
        Back To Get Information
      </Link>
      <div className='card grid-2'>
        {company.name && <strong> Name: {company.name}</strong>}
        <br />
        {company.agent && (
          <Fragment>
            <strong> Agent: {company.agent}</strong>
            <br />
          </Fragment>
        )}

        {company.phone && (
          <Fragment>
            <strong> Phone Number: {company.phone}</strong>
            <br />
          </Fragment>
        )}
        {company.street && (
          <Fragment>
            <strong> Street: {company.street}</strong>
            <br />
          </Fragment>
        )}
        {company.city && (
          <Fragment>
            <strong> City: {company.city}</strong>
            <br />
          </Fragment>
        )}
        {company.country && (
          <Fragment>
            <strong> Country: {company.country}</strong>
            <br />
          </Fragment>
        )}
      </div>
      <div className='card grid-2'>
        {company.occupation && (
          <Fragment>
            <strong> Occupation: {company.occupation}</strong>
          </Fragment>
        )}
      </div>
      <div className='card grid-2'>
        {company.communicativeness && (
          <Fragment>
            <strong> Communicativeness: {company.communicativeness} </strong>
            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={company.communicativeness}
              step='1'
            />
          </Fragment>
        )}
      </div>
      <div className='card grid-2'>
        {company.professionalism && (
          <Fragment>
            <strong> Professionalism: {company.professionalism} </strong>
            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={company.professionalism}
              step='1'
            />
          </Fragment>
        )}
      </div>

      <div className='card grid-2'>
        {company.execution_of_obligations && (
          <Fragment>
            <strong>
              Execution of obligations: {company.execution_of_obligations}{' '}
            </strong>

            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={company.execution_of_obligations}
              step='1'
            />
          </Fragment>
        )}
      </div>
      <div className='card grid-2'>
        {company.trust_degree && (
          <Fragment>
            <strong> Trust Degree: {company.trust_degree} </strong>
            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={company.trust_degree}
              step='1'
            />
          </Fragment>
        )}
      </div>

      <div className='card grid-2'>
        {company.additional_info ? (
          <Fragment>
            <strong> Additional Info: {company.additional_info}</strong>
          </Fragment>
        ): <strong> No Additional Info...</strong>}
      </div>
    </Fragment>
  );
};
