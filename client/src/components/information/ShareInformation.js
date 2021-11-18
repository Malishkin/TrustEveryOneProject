import React, { Fragment } from 'react';
import { useHistory } from 'react-router';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

export const ShareInformation = () => {
  const history = useHistory();
  const addPerson = () => {
    const MySwal = withReactContent(Swal);
 

          const swalWithBootstrapButtons = MySwal.mixin({
          customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-dark'
          },
          buttonsStyling: false
        })
        
          swalWithBootstrapButtons.fire({
            title: 'Do you want to get token for shearing?',
            
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yes, I want!',
            cancelButtonText: 'No, I just want to share',
            reverseButtons: true
          }).then((result) =>
          {
            if (result.isConfirmed) {
              history.push('/cryptowalletperson');
            
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            history.push('/addperson');
          }
        })
  };

  const addCompany = () => {
    const MySwal = withReactContent(Swal);
 

    const swalWithBootstrapButtons = MySwal.mixin({
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-dark'
    },
    buttonsStyling: false
  })
  
    swalWithBootstrapButtons.fire({
      title: 'Do you want to get token for shearing?',
      
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, I want!',
      cancelButtonText: 'No, I just want to share',
      reverseButtons: true
    }).then((result) =>
    {
      if (result.isConfirmed) {
        history.push('/cryptowalletcompany');
      
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      history.push('/addcompany');
    }
  })
  };
  const addSocialMedia = () => {
    const MySwal = withReactContent(Swal);
 

          const swalWithBootstrapButtons = MySwal.mixin({
          customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-dark'
          },
          buttonsStyling: false
        })
        
          swalWithBootstrapButtons.fire({
            title: 'Do you want to get token for shearing?',
            
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yes, I want!',
            cancelButtonText: 'No, I just want to share',
            reverseButtons: true
          }).then((result) =>
          {
            if (result.isConfirmed) {
              history.push('/cryptowalletsocialmedia');
            
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            history.push('/addsocialmedia');
          }
        })
  };
  const addProduct = () => {
    const MySwal = withReactContent(Swal);
 

          const swalWithBootstrapButtons = MySwal.mixin({
          customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-dark'
          },
          buttonsStyling: false
        })
        
          swalWithBootstrapButtons.fire({
            title: 'Do you want to get token for shearing?',
            
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yes, I want!',
            cancelButtonText: 'No, I just want to share',
            reverseButtons: true
          }).then((result) =>
          {
            if (result.isConfirmed) {
              history.push('/cryptowalletproduct');
            
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            history.push('/addproduct');
          }
        })
  };
  const addService = () => {
    const MySwal = withReactContent(Swal);
 

          const swalWithBootstrapButtons = MySwal.mixin({
          customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-dark'
          },
          buttonsStyling: false
        })
        
          swalWithBootstrapButtons.fire({
            title: 'Do you want to get token for shearing?',
            
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yes, I want!',
            cancelButtonText: 'No, I just want to share',
            reverseButtons: true
          }).then((result) =>
          {
            if (result.isConfirmed) {
              history.push('/cryptowalletservice');
            
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            history.push('/addservice');
          }
        })
  };
  return (
    <Fragment>
      <p className='lead'>
        <i className='fas fa-users'></i> Share Information
      </p>
      <Tabs>
        <TabList>
          <Tab>
            <Popup
              trigger={<span onClick={addPerson}>Person</span>}
              on={['hover', 'focus']}
              position='bottom center'>
              <div style={{ paddingTop: '30px' }}>
                {' '}
                Сlick on the button to add a person
              </div>
            </Popup>
          </Tab>
          <Tab>
            <Popup
              trigger={<span onClick={addCompany}>Company</span>}
              on={['hover', 'focus']}
              position='bottom center'>
              <div style={{ paddingTop: '30px' }}>
                {' '}
                Сlick on the button to add a company
              </div>
            </Popup>
          </Tab>
          <Tab>
            <Popup
              trigger={<span onClick={addSocialMedia}>Social Media</span>}
              on={['hover', 'focus']}
              position='bottom center'>
              <div style={{ paddingTop: '30px' }}>
                {' '}
                Сlick on the button to add a social media
              </div>
            </Popup>
          </Tab>
          <Tab>
            <Popup
              trigger={<span onClick={addProduct}>Product</span>}
              on={['hover', 'focus']}
              position='bottom center'>
              <div style={{ paddingTop: '30px' }}>
                {' '}
                Сlick on the button to add a product
              </div>
            </Popup>
          </Tab>
          <Tab>
            <Popup
              trigger={<span onClick={addService}>Service</span>}
              on={['hover', 'focus']}
              position='bottom center'>
              <div style={{ paddingTop: '30px' }}>
                {' '}
                Сlick on the button to add a service
              </div>
            </Popup>
          </Tab>
        </TabList>
      </Tabs>
      {/* <p className='lead'>
        <i className='fas fa-users'></i> Share Information
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridGap: '1rem',
        }}>
        <div className='dropdown'>
        <Popup
            trigger={
              <button
                className='btn btn-dark'
                onClick={addPerson}>
                Person
              </button>
            }
            on={['hover', 'focus']}
            position='top center'>
            <div>
              {' '}
              Share information about person you want
            </div>
          </Popup>
        </div>

        <div className='dropdown'>
        <Popup
            trigger={
              <button
                className='btn btn-dark'
                onClick={addCompany}>
                Company
              </button>
            }
            on={['hover', 'focus']}
            position='top center'>
            <div>
              {' '}
              Share information about company you want
            </div>
          </Popup>
        </div>
        <div className='dropdown'>
        <Popup
            trigger={
              <button
                className='btn btn-dark'
                onClick={addSocialMedia}>
                Social Media
              </button>
            }
            on={['hover', 'focus']}
            position='top center'>
            <div>
              {' '}
              Share information about social media you want
            </div>
          </Popup>
        </div>
        <div className='dropdown'>
        <Popup
            trigger={
              <button
                className='btn btn-dark'
                onClick={addProduct}>
                Product
              </button>
            }
            on={['hover', 'focus']}
            position='top center'>
            <div>
              {' '}
              Share information about product you want
            </div>
          </Popup>
        </div>
        <div className='dropdown'>
        <Popup
            trigger={
              <button
                className='btn btn-dark'
                onClick={addService}>
                Service
              </button>
            }
            on={['hover', 'focus']}
            position='top center'>
            <div>
              {' '}
              Share information about service you want
            </div>
          </Popup>
        </div>
      </div> */}
    </Fragment>
  );
};
