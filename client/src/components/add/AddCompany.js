import React, { useHistory } from 'react-router-dom';
import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddCompany = () => {
  const history = useHistory();
  const [company, setCompany] = useState([]);

  const customSubmit = async (e) => {
    e.preventDefault();

    try {
      let obj = {
        name: company.name,
        agent: company.agent,
        phone: company.phone,
        street: company.street,
        city: company.city,
        country: company.country,
        occupation: company.occupation,
        communicativeness: company.communicativeness,
        professionalism: company.professionalism,
        execution_of_obligations: company.execution_of_obligations,
        trust_degree: company.trust_degree,
        additional_info: company.additional_info,
      };
      await axios.post('/api/companies', obj);

      history.push('/shareinformation');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const cancelCompany = () => {
    history.push('/shareinformation');
  };

  return (
    <Fragment>
      <Link to='/shareinformation' className='btn btn-light'>
        Back To Share Information
      </Link>
      <div className='App'>
        <h1 className='large text-primary'>Add Company</h1>

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
                  setCompany({ ...company, name: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Agent: &nbsp;{' '}
              <input
                type='text'
                onChange={(e) =>
                  setCompany({ ...company, agent: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              Phone number:{' '}
              <input className="input-group-prepend"
                type='tel'
                // pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                // placeholder='xxx-xxx-xxxx'
                onChange={(e) =>
                  setCompany({ ...company, phone: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              Street: &nbsp;{' '}
              <input
                type='text'
                onChange={(e) =>
                  setCompany({ ...company, street: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              City: &nbsp;{' '}
              <input
                type='text'
                onChange={(e) =>
                  setCompany({ ...company, city: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              Country: &nbsp;{' '}
              <input
                type='text'
                onChange={(e) =>
                  setCompany({ ...company, country: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              Occupation: &nbsp;{' '}
              <input
                type='text'
                placeholder='Enter the occupation *'
                onChange={(e) =>
                  setCompany({ ...company, occupation: e.target.value })
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
                  setCompany({ ...company, communicativeness: e.target.value })
                }
                required
              /> */}
              <input
                type='number'
                min='0'
                max='10'
                
                onChange={(e) =>
                  setCompany({ ...company, communicativeness: e.target.value })
                }
                
                required
              />
            </div>
            <div className='form-group'>
              Professionalism  from 0 to 10: &nbsp;{' '}
              {/* <input
                type='range'
                min='1'
                max='10'
                onChange={(e) =>
                  setCompany({ ...company, professionalism: e.target.value })
                }
                required
              /> */}
              <input
                type='number'
                min='0'
                max='10'
                
                onChange={(e) =>
                  setCompany({ ...company, professionalism: e.target.value })
                }
                
                required
              />
            </div>
            <div className='form-group'>
              Execution of obligations  from 0 to 10: &nbsp;{' '}
              {/* <input
                type='range'
                min='1'
                max='10'
                onChange={(e) =>
                  setCompany({
                    ...company,
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
                  setCompany({ ...company, execution_of_obligations: e.target.value })
                }
                
                required
              />
            </div>
            <div className='form-group'>
              Trust degree  from 0 to 10: &nbsp;{' '}
              {/* <input
                type='range'
                min='1'
                max='10'
                onChange={(e) =>
                  setCompany({
                    ...company,
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
                  setCompany({ ...company, trust_degree: e.target.value })
                }
                
                required
              />
            </div>
            <div className='form-group'>
              Additional Info: &nbsp;{' '}
              <input
                type='text'
                onChange={(e) =>
                  setCompany({ ...company, additional_info: e.target.value })
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
              onClick={cancelCompany}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddCompany;
