import React from 'react';
import { useHistory } from 'react-router';



const PersonItem = (props) =>
{
  const history = useHistory();
  
  const about = () =>
  {
    history.push('/aboutsocialmedia/' + props.mediaData._id)
  }
  return (
    <div className='card text-center'>
      <h3> {props.mediaData.additional_info} </h3>
      <div>
      <button  className="btn btn-dark btn-sm my-1" onClick={about}>More</button>
      </div>
    </div>
  );
};

export default PersonItem;
