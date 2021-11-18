const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const Service = require('../models/Service');

const Sevice = require('../models/Service');

//@route       POST api/services
//desc         Register a service
//access       Public
router.post(
  '/',
  [
    check('name', 'Please add a name').not().isEmpty(),
    check('location', 'Please add a location').not().isEmpty(),
    check('type_of_service', 'Please add type of service').not().isEmpty(),

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
    check('expected_value', 'Please mark expectation degree from 0 to 10')
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
      location,
      supplier,
      type_of_service,
      communicativeness,
      professionalism,
      execution_of_obligations,
      trust_degree,
      expected_value,
      additional_info,
    } = req.body;

    try {
      let service = new Service({
        name,
        location,
        supplier,
        type_of_service,
        communicativeness,
        professionalism,
        execution_of_obligations,
        trust_degree,
        expected_value,
        additional_info,
      });

      await service.save();
      res.json(service);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
router.get('/', async (req, res) => {
  try {
    //http://server:5000/services?countForText=aa

    //Sveta lantsman
    let searchText = req.query.searchText;
    let splitedSearchText = searchText.split(' ');

    console.log('Received searchText: ', searchText);
    const services = await Service.find({
      $or: [
        { name: { $regex: new RegExp(searchText, 'i') } },
        { location: { $regex: new RegExp(searchText, 'i') } },
        { supplier: { $regex: new RegExp(searchText, 'i') } },
        { type_of_service: { $regex: new RegExp(searchText, 'i') } },

        {
          $and: [
            { name: { $regex: new RegExp(splitedSearchText[0], 'i') } },
            {
              type_of_service: {
                $regex: new RegExp(splitedSearchText[1], 'i'),
              },
            },
          ],
        },
        {
          $and: [
            { name: { $regex: new RegExp(splitedSearchText[1], 'i') } },
            {
              type_of_service: {
                $regex: new RegExp(splitedSearchText[0], 'i'),
              },
            },
          ],
        },
        {
          $and: [
            { name: { $regex: new RegExp(splitedSearchText[0], 'i') } },
            {
              location: { $regex: new RegExp(splitedSearchText[1], 'i') },
            },
          ],
        },

        {
          $and: [
            { name: { $regex: new RegExp(splitedSearchText[1], 'i') } },
            {
              location: { $regex: new RegExp(splitedSearchText[0], 'i') },
            },
          ],
        },
      ],
    });

    console.log('Services found in mongo:\n', services);

    res.json(services);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route       GET api/services
//desc         Get all services
//access       Public
router.get('/', async (req, res) => {
  try {
    const services = await Service.find({});
    res.json(services);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// router.get('/', async (req, res) => {
//   try {
//     //http://server:5000/services?search=aa
//     let countForText = req.query.countForText;
//     console.log('Received countForText: ', countForText);

//     const count_services = await Service.where({
//       $or: [
//         { name: { $regex: new RegExp(countForText, 'i') } },
//         { location: { $regex: new RegExp(countForText, 'i') } },
//         { supplier: { $regex: new RegExp(countForText, 'i') } },
//         { type_of_service: { $regex: new RegExp(countForText, 'i') } }

//       ],
//     }).count();

//     // const countQuery = model.where({ 'color': 'black' }).count();
//     // coll.find({paymentDate: {$gte: "2016-02-18", $lte: "2016-06-19"}});
//     console.log('Companies found in mongo: ', count_services);

//     res.json(count_services);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });
//@route       GET api/services/id
//desc         Get service by id
//access       Public

router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    res.json(service);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
