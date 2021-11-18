import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router';


export const CryptoWalletSocialMedia = () =>
{
    const history = useHistory();
    const onSubmit = (e) =>
    {
        e.preventDefault();
        history.push('/addsocialmedia')
  }
  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Your Wallet</h1>
      <p className='lead'>
        <i className='fas fa-wallet'></i> Enter your Crypto Wallet
      </p>
      <form className='form' onSubmit = {e=>onSubmit(e)}>
       
        <div className='form-group'>
          <input
            type='text'
            placeholder='Enter you wallet number'
            name='wallet'
            // value={email}
            // onChange={(e) => onChange(e)}
            required
          />
         
        </div>
       
        
        <input type='submit' className='btn btn-primary' value='Next to Information' /> 
        {
          
        }
      </form>
      <p className='my-1'>
        Don't have a wallet? <Link to='/'>Press Here</Link>
      </p>
    </Fragment>
  );
};
 