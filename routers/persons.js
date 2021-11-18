const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const Person = require('../models/Person');

//@route       POST api/persons
//desc         Register a person
//access       Public
router.post(
  '/',
  [
    check('firstName', 'Please add a first name').not().isEmpty(),
    check('lastName', 'Please add a last name').not().isEmpty(),
    check('occupation', 'Please add an occupation').not().isEmpty(),
    check('communicativeness', 'Please mark communicativeness from 0 to 10')
      .not()
      .isEmpty(),
    check('professionalism', 'Please mark professionalism from 0 to 10')
      .not()
      .isEmpty(),
    check(
      'execution_of_obligations',
      'Please mark execution of obligations from 0 to 10'
    )
      .not()
      .isEmpty(),
    check('trust_degree', 'Please mark trust degree from 0 to 10')
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      middleName,
      lastName,
      aliasName,
      date_of_birth,
      street,
      city,
      country,
      occupation,
      communicativeness,
      professionalism,
      execution_of_obligations,
      trust_degree,
      additional_info,
    } = req.body;

    try {
      let person = new Person({
        firstName,
        middleName,
        lastName,
        aliasName,
        date_of_birth,
        street,
        city,
        country,
        occupation,
        communicativeness,
        professionalism,
        execution_of_obligations,
        trust_degree,
        additional_info,
      });

      await person.save();
      res.json(person);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// How to do it:
//1) user search: "aa" --> react --> count persons for search="aa" --> mongo: name contains "aa" OR phone contains "aa" ---> server returns 2000 to react
//2) react asks the user for more info --> react sends more info to server -->
//   server returns how much persons now. Example: 9
//3) if server returns less then 10 then react asks server to get all these 10 persons

// //@route       GET api/persons
// //desc         Get all persons
// //access       Public
// router.get('/', async (req, res) => {
//   try {
//     //http://server:5000/persons?countForText=aa
//     let countForText = req.query.countForText;
//     console.log('Received countForText: ', countForText);
//     // const persons = await Person.find({
//     //   $or: [
//     //     { firstName: { $regex: new RegExp(search, "i") } },
//     //     { lastName: { $regex: new RegExp(search, "i") } },
//     //     { middleName: { $regex: new RegExp(search, "i") } },
//     //     { aliasName: { $regex: new RegExp(search, "i") } },
//     //   ],
//     // });

//     const count_persons = await Person.where({
//       $or: [
//         { firstName: { $regex: new RegExp(countForText, "i") } },
//         { lastName: { $regex: new RegExp(countForText, "i") } },
//         { middleName: { $regex: new RegExp(countForText, "i") } },
//         { aliasName: { $regex: new RegExp(countForText, "i") } },
//         { occupation: { $regex: new RegExp(countForText, "i") } }
//       ],
//     }).count();

// //     // const countQuery = model.where({ 'color': 'black' }).count();
// //    // coll.find({paymentDate: {$gte: "2016-02-18", $lte: "2016-06-19"}});
//     console.log('Persons found in mongo: ', count_persons);

//     res.json(count_persons)

//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

router.get('/', async (req, res) => {
  try {
    //http://server:5000/persons?countForText=aa

    //Sveta lantsman
    let searchText = req.query.searchText;
    let splitedSearchText = searchText.split(' ');

    console.log('Received searchText: ', searchText);
    const persons = await Person.find({
      $or: [
        { firstName: { $regex: new RegExp(searchText, 'i') } },
        { lastName: { $regex: new RegExp(searchText, 'i') } },
        { middleName: { $regex: new RegExp(searchText, 'i') } },
        { aliasName: { $regex: new RegExp(searchText, 'i') } },
        {
          $and: [
           { firstName: { $regex: new RegExp(splitedSearchText[0], 'i') }},
            { lastName: { $regex: new RegExp(splitedSearchText[1], 'i') } },
          ]
        },
        {
          $and: [
           { firstName: { $regex: new RegExp(splitedSearchText[1], 'i') }},
            { lastName: { $regex: new RegExp(splitedSearchText[0], 'i') } },
          ]
        },

      ],
    });

    // const count_persons = await Person.where({
    //   $or: [
    //     { firstName: { $regex: new RegExp(countForText, "i") } },
    //     { lastName: { $regex: new RegExp(countForText, "i") } },
    //     { middleName: { $regex: new RegExp(countForText, "i") } },
    //     { aliasName: { $regex: new RegExp(countForText, "i") } },
    //     { occupation: { $regex: new RegExp(countForText, "i") } }
    //   ],
    // }).count();

    console.log('Persons found in mongo:\n', persons);

    res.json(persons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route       GET api/persons/id
//desc         Get person by id
//access       Public

router.get('/:id', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    res.json(person);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/person', async (req, res) => {
  try {
    //http://server:5000/persons/person?search=aa
    let searchForText = req.query.searchText;
    console.log('Received searchText: ', searchForText);

    const find_persons = await Person.find({
      $or: [
        { firstName: { $regex: new RegExp(searchForText, 'i') } },
        { lastName: { $regex: new RegExp(searchForText, 'i') } },
        { middleName: { $regex: new RegExp(searchForText, 'i') } },
        { aliasName: { $regex: new RegExp(searchForText, 'i') } },
        { occupation: { $regex: new RegExp(searchForText, 'i') } },
      ],
    });

    console.log('Persons found in mongo: ', find_persons);

    res.json(find_persons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    const persons = await Person.find({});
    res.json(persons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
