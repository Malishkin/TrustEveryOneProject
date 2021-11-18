import { useParams } from 'react-router-dom';
import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as ReactDOM from "react-dom";

import axios from 'axios';

export const AboutPerson = (props) => {
  const [person, setPerson] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function fetchData() {
      let resp = await axios.get('/api/persons/' + params.id);
      setPerson(resp.data);
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <Link to='/getinformation' className='btn btn-light'>
        Back To Get Information
      </Link>
      <div className='card grid-2'>
        
        {person.firstName && <strong>First Name: {person.firstName } </strong>}
        <br />
        {person.middleName && <strong>Middle Name: {person.middleName}</strong>}
        <br />
        {person.lastName && <strong>Last Name: {person.lastName}</strong>}
        <br />

        {person.aliasName && (
          <Fragment>
            <strong>Alias Name: {person.aliasName}</strong>
            <br />
          </Fragment>
        )}
        {person.date_of_birth && (
          <Fragment>
            <strong>Date of Birth: {person.date_of_birth.slice(0, 10)}</strong>
            <br />
          </Fragment>
        )}
        {person.street && (
          <Fragment>
            <strong>Street: {person.street}</strong>
            <br />
          </Fragment>
        )}
        {person.city && (
          <Fragment>
            <strong>City: {person.city}</strong>
            <br />
          </Fragment>
        )}
        {person.country && (
          <Fragment>
            <strong>Country: {person.country}</strong>
            <br />
          </Fragment>
        )}
      </div>

      <div className='card grid-2'>
        {person.occupation && (
          <Fragment>
            <strong>Occupation: {person.occupation}</strong>
          </Fragment>
        )}
      </div>
      <div className='card grid-2'>
        {person.communicativeness && (
          <Fragment>
            <strong>Communicativeness: {person.communicativeness} </strong>
            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={person.communicativeness}
              step='1'
            />
          </Fragment>
        )}
      </div>
      <div className='card grid-2'>
        {person.communicativeness && (
          <Fragment>
            <strong>Professionalism: {person.professionalism} </strong>
            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={person.professionalism}
              step='1'
            />
          </Fragment>
        )}
      </div>

      <div className='card grid-2'>
        {person.execution_of_obligations && (
          <Fragment>
            <strong>
              Execution of obligations: {person.execution_of_obligations}{' '}
            </strong>

            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={person.execution_of_obligations}
              step='1'
            />
          </Fragment>
        )}
      </div>
      <div className='card grid-2'>
        {person.trust_degree && (
          <Fragment>
            <strong>Trust Degree: {person.trust_degree} </strong>
            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={person.trust_degree}
              step='1'
            />
          </Fragment>
        )}
      </div>

      <div className='card grid-2'>
        {person.additional_info ? (
          <Fragment>
            <strong> Additional Info: {person.additional_info}</strong>
          </Fragment>
        ): <strong> No Additional Info...</strong>}
      </div>
    
    </Fragment>
  );
};
