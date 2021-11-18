import React from 'react';
import { useHistory } from 'react-router';



const PersonItem = (props) =>
{
  const history = useHistory();
  
  const about = () =>
  {
    history.push('/aboutperson/' + props.personData._id)
  }
  return (
    <div className='card text-center'>
          <h3>  {props.personData.firstName} </h3>
          <h3> {props.personData.lastName} </h3>
          <div>
              <button  className="btn btn-dark btn-sm my-1" onClick={about}>More</button>
          </div>
    </div>
  );
};

export default PersonItem;
