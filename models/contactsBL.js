
const ContactsModel = require('./Contacts');


const getContacts = () =>
{
    return new Promise((resolve, reject) =>
    {
        ContactsModel.find({}, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data);
            }
        }).populate('person', ['firstName', 'lastName', 'occupation']).populate('company',['name', 'occupation']);
    })
}

const getContact= (id) =>
{
    return new Promise((resolve, reject) =>
    {
        ContactsModel.findById(id, function (err, data)
        {
            if (err) {
                reject(err)
            }
            else {
                resolve(data);
            }
        }).populate('person', ['firstName', 'lastName', 'occupation']).populate('company',['name', 'occupation']);
    })
}




const addContact = (obj) =>
{
    return new Promise((resolve, reject) =>
    {

        let contact = new ContactsModel({
            person: obj.person,
            company: obj.company,
            firstName: obj.firstName,
            middleName: obj.middleName,
            lastName: obj.lastName,
            aliasName: obj.aliasName,
            date_of_birth: obj.date_of_birth,
            street: obj.street,
            city: obj.city,
            country: obj.country,
            occupation: obj.occupation,
            communicativeness: obj.communicativeness,
            professionalism: obj.professionalism,
            execution_of_obligations: obj.execution_of_obligations,
            trust_degree: obj.trust_degree,
            additional_info: obj.additional_info

        });

        contact.save( function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(contact);
            }
        });
    })
}






module.exports =  {getContacts, getContact, addContact};