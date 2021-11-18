import React from 'react';
import { useHistory } from 'react-router';

const CompanyItem = (props) => {
  const history = useHistory();
  const about = () => {
    history.push('/aboutcompany/' + props.companyData._id);
  };
  return (
    <div className='card text-center'>
      <h3> {props.companyData.name} </h3>
      <h3> {props.companyData.occupation} </h3>
      <div>
        <button className='btn btn-dark btn-sm my-1' onClick={about}>
          More
        </button>
      </div>
    </div>
  );
};

export default CompanyItem;
