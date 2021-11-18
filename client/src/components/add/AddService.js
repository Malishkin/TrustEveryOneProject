import React, { useHistory } from 'react-router-dom';
import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddService = () => {
  const history = useHistory();
  const [service, setService] = useState([]);

  const customSubmit = async (e) => {
    e.preventDefault();

    try {
      let obj = {
        name: service.name,
        location: service.location,
        supplier: service.supplier,

        type_of_service: service.type_of_service,
        communicativeness: service.communicativeness,
        professionalism: service.professionalism,
        execution_of_obligations: service.execution_of_obligations,
        trust_degree: service.trust_degree,
        expected_value: service.expected_value,
        additional_info: service.additional_info,
      };
      await axios.post('/api/services', obj);

      history.push('/shareinformation');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const cancelService = () => {
    history.push('/shareinformation');
  };

  return (
    <Fragment>
      <Link to='/shareinformation' className='btn btn-light'>
        Back To Share Information
      </Link>
      <div className='App'>
        <h1 className='large text-primary'>Add Service</h1>

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
                  setService({ ...service, name: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Location: &nbsp;{' '}
              <input
                type='text'
                placeholder='Enter the location *'
                onChange={(e) =>
                  setService({ ...service, location: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Supplier:{' '}
              <input
                type='text'
                onChange={(e) =>
                  setService({ ...service, supplier: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              Type of service: &nbsp;{' '}
              <input
                type='text'
                placeholder='Enter the type of Service *'
                onChange={(e) =>
                  setService({ ...service, type_of_service: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Communicativeness from 0 to 10: &nbsp;{' '}
              {/* <input
                type='range'
                min='1'
                max='10'
                onChange={(e) =>
                  setService({ ...service, communicativeness: e.target.value })
                }
                required
              /> */}
              <input
                type='number'
                min='0'
                max='10'
                onChange={(e) =>
                  setService({ ...service, communicativeness: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Professionalism from 0 to 10: &nbsp;{' '}
              {/* <input
                type='range'
                min='1'
                max='10'
                onChange={(e) =>
                  setService({ ...service, professionalism: e.target.value })
                }
                required
              /> */}
              <input
                type='number'
                min='0'
                max='10'
                onChange={(e) =>
                  setService({ ...service, professionalism: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Execution of obligations from 0 to 10: &nbsp;{' '}
              {/* <input
                type='range'
                min='1'
                max='10'
                onChange={(e) =>
                  setService({
                    ...service,
                    execution_of_obligations: e.target.value,
                  })
                }
                required
              /> */}
              <input
                type='number'
                min='0'
                max='10'
                onChange={(e) =>
                  setService({
                    ...service,
                    execution_of_obligations: e.target.value,
                  })
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
                  setService({
                    ...service,
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
                  setService({ ...service, trust_degree: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Expected Value from 0 to 10: &nbsp;{' '}
              {/* <input
                type='range'
                min='1'
                max='10'
                onChange={(e) =>
                  setService({
                    ...service,
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
                  setService({ ...service, expected_value: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Additional Info: &nbsp;{' '}
              <input
                type='text'
                onChange={(e) =>
                  setService({ ...service, additional_info: e.target.value })
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
              onClick={cancelService}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddService;
