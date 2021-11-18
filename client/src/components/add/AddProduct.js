import React, { useHistory } from 'react-router-dom';
import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {
  const history = useHistory();
  const [product, setProduct] = useState([]);

  const customSubmit = async (e) => {
    e.preventDefault();

    try {
      let obj = {
        name: product.name,
        brand: product.brand,
        model: product.model,
        manufacturer: product.manufacturer,

        country: product.country,
        functionality: product.functionality,
        efficiency: product.efficiency,
        reliability: product.reliability,
        convenience: product.convenience,
        trust_degree: product.trust_degree,
        expected_value: product.expected_value,
        additional_info: product.additional_info,
      };
      await axios.post('/api/products', obj);

      history.push('/shareinformation');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const cancelProduct = () => {
    history.push('/shareinformation');
  };

  return (
    <Fragment>
      <Link to='/shareinformation' className='btn btn-light'>
        Back To Share Information
      </Link>
      <div className='App'>
        <h1 className='large text-primary'>Add Product</h1>

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
              Name: &nbsp; &nbsp;{' '}
              <input
                type='text'
                placeholder='Enter the name *'
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Brand:{' '}
              <input
                type='text'
                placeholder='Enter the brand *'
                onChange={(e) =>
                  setProduct({ ...product, brand: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Model: &nbsp;{' '}
              <input
                type='text'
                onChange={(e) =>
                  setProduct({ ...product, model: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              Manufacturer: &nbsp;{' '}
              <input
                type='text'
                placeholder='Enter the manufacturer *'
                onChange={(e) =>
                  setProduct({ ...product, manufacturer: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Country: &nbsp;{' '}
              <input
                type='text'
                onChange={(e) =>
                  setProduct({ ...product, country: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              Functionality:{' '}
              <input
                type='text'
                placeholder='Enter the functionality *'
                onChange={(e) =>
                  setProduct({ ...product, functionality: e.target.value })
                }
                required
              />
              
            </div>
            <div className='form-group'>
              Efficiency from 0 to 10: &nbsp;{' '}
              {/* <input
                type='range'
                min='1'
                max='10'
                onChange={(e) =>
                  setProduct({ ...product, efficiency: e.target.value })
                }
                required
              /> */}
              <input
                type='number'
                min='0'
                max='10'
                onChange={(e) =>
                  setProduct({ ...product, efficiency: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Reliability from 0 to 10: &nbsp;{' '}
              {/* <input
                type='range'
                min='1'
                max='10'
                onChange={(e) =>
                  setProduct({
                    ...product,
                    reliability: e.target.value,
                  })
                }
                required
              /> */}
              <input
                type='number'
                min='0'
                max='10'
                onChange={(e) =>
                  setProduct({ ...product, reliability: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Convinience from 0 to 10: &nbsp;{' '}
              {/* <input
                type='range'
                min='1'
                max='10'
                onChange={(e) =>
                  setProduct({
                    ...product,
                    convenience: e.target.value,
                  })
                }
                required
              /> */}
              <input
                type='number'
                min='0'
                max='10'
                onChange={(e) =>
                  setProduct({ ...product, convenience: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Trust degree from 0 to 10: &nbsp;{' '}
              {/* <input
                type='range'
                min='1'
                max='10'
                onChange={(e) =>
                  setProduct({
                    ...product,
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
                  setProduct({ ...product, trust_degree: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Expected value from 0 to 10: &nbsp;{' '}
              {/* <input
                type='range'
                min='1'
                max='10'
                onChange={(e) =>
                  setProduct({
                    ...product,
                    expected_value: e.target.value,
                  })
                }
                required
              /> */}
               <input
                type='number'
                min='0'
                max='10'
                
                onChange={(e) =>
                  setProduct({ ...product, expected_value: e.target.value })
                }
                
                required
              />
            </div>
            <div className='form-group'>
              Additional Info: &nbsp;{' '}
              <input
                type='text'
                onChange={(e) =>
                  setProduct({ ...product, additional_info: e.target.value })
                }
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
              onClick={cancelProduct}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddProduct;
