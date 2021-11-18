const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const Product = require('../models/Product');

//@route       POST api/products
//desc         Register a product
//access       Public
router.post(
  '/',
  [
    check('name', 'Please add a name').not().isEmpty(),
    check('brand', 'Please add a brand').not().isEmpty(),
    check('manufacturer', 'Please add a manufacturer').not().isEmpty(),
    check('functionality', 'Please add a function').not().isEmpty(),
    check('efficiency', 'Please mark efficiency from 0 to 10').not().isEmpty(),
    check('reliability', 'Please mark reliability from 0 to 10')
      .not()
      .isEmpty(),
    check('convenience', 'Please mark convenience from 0 to 10')
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
      brand,
      model,
      manufacturer,
      country,
      functionality,
      efficiency,
      reliability,
      convenience,
      trust_degree,
      expected_value,
      additional_info,
    } = req.body;

    try {
      let product = new Product({
        name,
        brand,
        model,
        manufacturer,
        country,
        functionality,
        efficiency,
        reliability,
        convenience,
        trust_degree,
        expected_value,
        additional_info,
      });

      await product.save();
      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.get('/', async (req, res) => {
  try {
    //http://server:5000/products?countForText=aa

    //Sveta lantsman
    let searchText = req.query.searchText;
    let splitedSearchText = searchText.split(' ');

    console.log('Received searchText: ', searchText);
    const products = await Product.find({
      $or: [
        { name: { $regex: new RegExp(searchText, 'i') } },
        { brand: { $regex: new RegExp(searchText, 'i') } },
        { model: { $regex: new RegExp(searchText, 'i') } },
        { manufacturer: { $regex: new RegExp(searchText, 'i') } },
        { functionality: { $regex: new RegExp(searchText, 'i') } },
        {
          $and: [
            { name: { $regex: new RegExp(splitedSearchText[0], 'i') } },
            { brand: { $regex: new RegExp(splitedSearchText[1], 'i') } },
          ],
        },
        {
          $and: [
            { name: { $regex: new RegExp(splitedSearchText[1], 'i') } },
            { brand: { $regex: new RegExp(splitedSearchText[0], 'i') } },
          ],
        },
        {
          $and: [
            { name: { $regex: new RegExp(splitedSearchText[0], 'i') } },
            { functionality: { $regex: new RegExp(splitedSearchText[1], 'i') } },
          ],
        },

        {
          $and: [
            { name: { $regex: new RegExp(splitedSearchText[1], 'i') } },
            { functionality: { $regex: new RegExp(splitedSearchText[0], 'i') } },
          ],
        },
      ],
    });

    console.log('Products found in mongo:\n', products);

    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       GET api/products
// desc         Get all products
// access       Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// router.get('/', async (req, res) => {
//   try {
//     //http://server:5000/products?search=aa
//     let countForText = req.query.countForText;
//     console.log('Received countForText: ', countForText);

//     const count_products = await Product.where({
//       $or: [
//         { name: { $regex: new RegExp(countForText, 'i') } },
//         { brand: { $regex: new RegExp(countForText, 'i') } },
//         { model: { $regex: new RegExp(countForText, 'i') } },
//         { manufacturer: { $regex: new RegExp(countForText, 'i') } },
//         { functionality: { $regex: new RegExp(countForText, 'i') } },
//       ],
//     }).count();

//     // const countQuery = model.where({ 'color': 'black' }).count();
//     // coll.find({paymentDate: {$gte: "2016-02-18", $lte: "2016-06-19"}});
//     console.log('Companies found in mongo: ', count_products);

//     res.json(count_products);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });
//@route       GET api/products/id
//desc         Get product by id
//access       Public

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
