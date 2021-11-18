import React, { useState, useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import axios from 'axios';
import SocialMediaItem from '../items/SocialMediaItem';


const SearchAndCountSocialMedia = () =>
{
  const [text, setText] = useState('');
  const [socialMediaCount, setSocialMediaCount] = useState([]);
  const [filteredSocialMedia, setFilteredSocialMedia] = useState([]);

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
        let response = await axios.get('/api/socialmedia?countForText=' + text);

        if (response.length === 0) {
          alertContext.setAlert('No results...', 'danger');
        }

        setSocialMediaCount(response.data);
        if (socialMediaCount <= 7 && socialMediaCount > 0) {
          let resp = await axios.get('/api/socialmedia/' + socialMediaCount._id);
          setFilteredSocialMedia(resp.data);
        }
     
      }
      fetchData();
    }
  };
  const showFiltered = async () =>
  {
  //persons by text
   console.log('socialMediaCount '+ socialMediaCount)
    console.log('filteredSocialMedia: ' + filteredSocialMedia)

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

      <h4>Found social media: {socialMediaCount}</h4>
      {socialMediaCount <= 7 && socialMediaCount > 0 && <button className='btn btn-dark' onClick={showFiltered} >Show</button>}
      {socialMediaCount > 7 && <button className='btn btn-primary' >Advanced Search...</button>}
    </div>
  );
};

export default SearchAndCountSocialMedia;
