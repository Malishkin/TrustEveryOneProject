import React, { useHistory } from 'react-router-dom';
import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddSocialMedia = () => {
  const history = useHistory();
  const [socialMedia, setSocialMedia] = useState({});
  

  const customSubmit = async (e) => {
    e.preventDefault();

    try {
      let obj = {
        facebook: socialMedia.facebook,
        instagram: socialMedia.instagram,
        twitter: socialMedia.twitter,
        website: socialMedia.website,
        phone: socialMedia.phone,

        trust_degree: socialMedia.trust_degree,
        additional_info: socialMedia.additional_info,
      };
      await axios.post('/api/socialmedia', obj);

      history.push('/shareinformation');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const cancelSocialMedia = () => {
    history.push('/shareinformation');
  };

  

  return (
    <Fragment>
      <Link to='/shareinformation' className='btn btn-light'>
        Back To Share Information
      </Link>
      <div className='App'>
        <h1 className='large text-primary'>Add Social Media</h1>

        <div
          className='App'
          style={{
            width: '500px',
            marginLeft: '33%',
            padding: '1rem',
            marginBottom: '1rem',
            marginTop: '0,5rem',
          }}>
          <form className='form' onSubmit={(e) => customSubmit(e)}>
            <div className='form-group'>
              facebook: &nbsp; &nbsp;{' '}
              <input
                type='url'
                placeholder='facebook...'
                onChange={(e) =>
                  setSocialMedia({ ...socialMedia, facebook: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              instagram: &nbsp;{' '}
              <input
                type='url'
                placeholder='instagram...'
                onChange={(e) =>
                  setSocialMedia({ ...socialMedia, instagram: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              twitter: &nbsp;{' '}
              <input
                type='url'
                placeholder='twitter...'
                onChange={(e) =>
                  setSocialMedia({ ...socialMedia, twitter: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              website: &nbsp;{' '}
              <input
                type='url'
                placeholder='website...'
                onChange={(e) =>
                  setSocialMedia({ ...socialMedia, website: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              Phone number:{' '}
              <input
                type='tel'
                // pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                // placeholder='xxx-xxx-xxxx'
                onChange={(e) =>
                  setSocialMedia({ ...socialMedia, phone: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              Trust degree from 0 to 10: &nbsp;{' '}
              {/* <input
                type='range'
                
                min='1'
                max='10'
                onChange={(e) =>
                  setSocialMedia({
                    ...socialMedia,
                    trust_degree: e.target.value,
                  })
                }
                required
              /> */}
              <input
                type='number'
                min='0'
                max='10'
                
                onChange={(e) =>
                  setSocialMedia({
                    ...socialMedia,
                    trust_degree: e.target.value,
                  })
                }
                
                required
              />
            </div>
            <div className='form-group'>
              Additional Info: &nbsp;{' '}
              <input
                type='text'
                placeholder='Additional info about *'
                onChange={(e) =>
                  setSocialMedia({
                    ...socialMedia,
                    additional_info: e.target.value,
                  })
                }
                required
              />
            </div>
            <input
              type='submit'
              className='btn btn-primary'
              value='Save Data'
            />{' '}
            &nbsp;
            <input
              type='button'
              className='btn btn-primary btn-dark'
              value='Cancel'
              onClick={cancelSocialMedia}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddSocialMedia;
