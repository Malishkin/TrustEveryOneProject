import React, { useState, useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import axios from 'axios';
import PersonItem from '../items/PersonItem';


const DisplayPersonsFromServer = ({ searchText }) =>
{
    const [persons, setPersons] = useState();

   
    fetchData();
    async function fetchData ()
    {
      console.log("Display Persons using searchtext: ", searchText);
        let response = await axios.get('/api/persons?countForText=' + searchText);
        setPersons(response.data);
      }
      fetchData();
    return (
        <div>
            {/* {persons.map((item) => {
        return <PersonItem key={item._id} personData={item} />;
      })} */}
            {"List of Persons: " + persons}
        </div>
    )
}

export default DisplayPersonsFromServer;