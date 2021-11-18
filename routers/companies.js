const express = require('express');
const router = express.Router();

const config = require('config');

const { check, validationResult } = require('express-validator');

const Company = require('../models/Company');

//@route       POST api/companies
//desc         Register a company
//access       Public
router.post(
  '/',
  [
    check('name', 'Please add a name').not().isEmpty(),

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
      name,
      agent,
      phone,
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
      let company = new Company({
        name,
        agent,
        phone,
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

      await company.save();
      res.json(company);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
router.get('/', async (req, res) => {
  try {
    //http://server:5000/companies?countForText=aa

    //Sveta lantsman
    let searchText = req.query.searchText;
    let splitedSearchText = searchText.split(' ');

    console.log('Received searchText: ', searchText);
    const companies = await Company.find({
      $or: [
        { name: { $regex: new RegExp(searchText, 'i') } },
        { agent: { $regex: new RegExp(searchText, 'i') } },
        { phone: { $regex: new RegExp(searchText, 'i') } },
        { occupation: { $regex: new RegExp(searchText, 'i') } },
        {
          $and: [
            { name: { $regex: new RegExp(splitedSearchText[0], 'i') } },
            { occupation: { $regex: new RegExp(splitedSearchText[1], 'i') } },
          ],
        },
        {
          $and: [
            { name: { $regex: new RegExp(splitedSearchText[1], 'i') } },
            { occupation: { $regex: new RegExp(splitedSearchText[0], 'i') } },
          ],
        },
        {
          $and: [
            { name: { $regex: new RegExp(splitedSearchText[0], 'i') } },
            { phone: { $regex: new RegExp(splitedSearchText[1], 'i') } },
          ],
        },

        {
          $and: [
            { name: { $regex: new RegExp(splitedSearchText[1], 'i') } },
            { phone: { $regex: new RegExp(splitedSearchText[0], 'i') } },
          ],
        },
      ],
    });

    console.log('Companies found in mongo:\n', companies);

    res.json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route       GET api/companies
//desc         Get all companies
//access       Public
router.get('/', async (req, res) => {
  try {
    const companies = await Company.find({});
    res.json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// router.get('/', async (req, res) => {
//   try {

//     //http://server:5000/companies?search=aa
//     let countForText = req.query.countForText;
//     console.log('Received countForText: ', countForText);

//     const count_companies = await Company.where({
//       $or: [
//         { name: { $regex: new RegExp(countForText, "i") } },
//         { agent: { $regex: new RegExp(countForText, "i") } },
//         { phone: { $regex: new RegExp(countForText, "i") } },
//         { occupation: { $regex: new RegExp(countForText, "i") } },
//       ],
//     }).count();

//     // const countQuery = model.where({ 'color': 'black' }).count();
//    // coll.find({paymentDate: {$gte: "2016-02-18", $lte: "2016-06-19"}});
//     console.log('Companies found in mongo: ', count_companies);

//     res.json(count_companies)

//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });
//@route       GET api/companies/id
//desc         Get all comany by id
//access       Public

router.get('/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    res.json(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
