const express = require('express');
const router = express.Router();


const contactBL = require('../models/contactsBL');

//@route       GET api/contacts
//desc         Get all users contacts
//access       Private

router.route('/')
    .get(function (req, resp)
    {
        contactBL.getContacts().then(data =>
        {
            return resp.json(data);
        })
    });

//@route       GET api/contacts/id
//desc         Get contact by id
//access       Public
router.route('/:id')
    .get(function(req, resp)
    {
        let id = req.params.id;

       contactBL.getContact(id).then(data =>
            {
                return resp.json(data);
            })
    })


//@route       POST api/contacts
//desc         Add new contact
//access       Private
router
  .route('/' )
  .post( function (req, resp) {
    let obj = req.body;
    

    contactBL.addContact(obj).then((data) => {
      return resp.json(data);
    });
  });


module.exports = router;
