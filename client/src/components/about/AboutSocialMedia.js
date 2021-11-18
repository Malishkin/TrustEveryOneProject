import { useParams } from 'react-router-dom';
import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export const AboutSocialMedia = (props) => {
  const [socialMedia, setsocialMedia] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function fetchData() {
      let resp = await axios.get('/api/socialmedia/' + params.id);
      setsocialMedia(resp.data);
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <Link to='/getinformation' className='btn btn-light'>
        Back To Get Information
      </Link>
      <div className='card grid-2'>
        {socialMedia.facebook && (
          <Fragment>
            <strong> Facebook:  {socialMedia.facebook}</strong><br/>
          </Fragment>
        )}

        {socialMedia.instagram && (
          <Fragment>
            <strong> Instagram: {socialMedia.instagram} </strong><br/>
          </Fragment>
        )}
        {socialMedia.twitter && (
          <Fragment>
            <strong> Twitter: {socialMedia.twitter} </strong><br/>
          </Fragment>
        )}
        {socialMedia.website && (
          <Fragment>
             <strong> Website: {socialMedia.website} </strong><br/>
          </Fragment>
        )}
        {socialMedia.phone && (
          <Fragment>
           <strong> Phone: {socialMedia.phone} </strong><br/>
          </Fragment>
        )}

       
      </div>

      <div className='card grid-2'>
        {socialMedia.trust_degree && (
          <Fragment>
            <strong> Trust Degree: {socialMedia.trust_degree} </strong>
            <input
              className='form-control-range'
              type='range'
              min='0'
              max='10'
              value={socialMedia.trust_degree}
              step='1'
            />
          </Fragment>
        )}
      </div>

      <div className='card grid-2'>
        {socialMedia.additional_info ? (
          <Fragment>
            <strong> Additional Info: {socialMedia.additional_info}</strong>
          </Fragment>
        ): <strong> No Additional Info...</strong>}
      </div>
    </Fragment>
  );
};
