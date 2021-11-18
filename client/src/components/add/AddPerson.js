import React, { useHistory } from 'react-router-dom';
import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddPerson = () => {
  const history = useHistory();
  const [person, setPerson] = useState([]);

  const customSubmit = async (e) => {
    e.preventDefault();

    try {
      let obj = {
        firstName: person.firstName,
        middleName: person.middleName,
        lastName: person.lastName,
        aliasName: person.aliasName,
        date_of_birth: person.date_of_birth,
        street: person.street,
        city: person.city,
        country: person.country,
        occupation: person.occupation,
        communicativeness: person.communicativeness,
        professionalism: person.professionalism,
        execution_of_obligations: person.execution_of_obligations,
        trust_degree: person.trust_degree,
        additional_info: person.additional_info,
      };
      await axios.post('/api/persons', obj);

      history.push('/shareinformation');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const cancelPerson = () => {
    history.push('/shareinformation');
  };

  return (
    <Fragment>
      <Link to='/shareinformation' className='btn btn-light'>
        Back To Share Information
      </Link>
      <div className='App'>
        <h1 className='large text-primary'>Add Person</h1>

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
              First Name: &nbsp; &nbsp;{' '}
              <input
                type='text'
                placeholder='Enter the first name *'
                onChange={(e) =>
                  setPerson({ ...person, firstName: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Middle Name: &nbsp;{' '}
              <input
                type='text'
                onChange={(e) =>
                  setPerson({ ...person, middleName: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              Last Name:{' '}
              <input
                type='text'
                placeholder='Enter the last name*'
                onChange={(e) =>
                  setPerson({ ...person, lastName: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Alias Name: &nbsp;{' '}
              <input
                type='text'
                onChange={(e) =>
                  setPerson({ ...person, aliasName: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              Date of Birth: &nbsp;{' '}
              <input
                className='post post-date'
                type='date'
                onChange={(e) =>
                  setPerson({ ...person, date_of_birth: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              Street: &nbsp;{' '}
              <input
                type='text'
                onChange={(e) =>
                  setPerson({ ...person, street: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              City: &nbsp;{' '}
              <input
                type='text'
                onChange={(e) => setPerson({ ...person, city: e.target.value })}
              />
            </div>
            <div className='form-group'>
              Country: &nbsp;{' '}
              <input
                type='text'
                onChange={(e) =>
                  setPerson({ ...person, country: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              Occupation: &nbsp;{' '}
              <input
                type='text'
                placeholder='Enter the occupation *'
                onChange={(e) =>
                  setPerson({ ...person, occupation: e.target.value })
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
                  setPerson({ ...person, communicativeness: e.target.value })
                }
                required
              /> */}
              <input
                type='number'
                min='0'
                max='10'
                onChange={(e) =>
                  setPerson({ ...person, communicativeness: e.target.value })
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
                  setPerson({ ...person, professionalism: e.target.value })
                }
                required
              /> */}
              <input
                type='number'
                min='0'
                max='10'
                onChange={(e) =>
                  setPerson({ ...person, professionalism: e.target.value })
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
                  setPerson({
                    ...person,
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
                  setPerson({
                    ...person,
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
                  setPerson({
                    ...person,
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
                  setPerson({ ...person, trust_degree: e.target.value })
                }
                required
              />
            </div>
            <div className='form-group'>
              Additional Info: &nbsp;{' '}
              <input
                type='text'
                onChange={(e) =>
                  setPerson({ ...person, additional_info: e.target.value })
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
              onClick={cancelPerson}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddPerson;
