const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const SocialMedia = require('../models/SocialMedia');

//@route       POST api/socialmedia
//desc         Register a socialmedia
//access       Public
router.post(
  '/',
  [check('additional_info', 'Please add any info about').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      facebook,
      instagram,
      twitter,
      website,
      phone,
      trust_degree,
      additional_info,
    } = req.body;

    try {
      let socialmedia = new SocialMedia({
        facebook,
        instagram,
        twitter,
        website,
        phone,
        trust_degree,
        additional_info,
      });

      await socialmedia.save();
      res.json(socialmedia);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.get('/', async (req, res) => {
  try {
    //http://server:5000/socialmedia?countForText=aa

    //Sveta lantsman
    let searchText = req.query.searchText;
    let splitedSearchText = searchText.split(' ');

    console.log('Received searchText: ', searchText);
    const socialmedia = await SocialMedia.find({
      $or: [
        { facebook: { $regex: new RegExp(searchText, 'i') } },
        { instagram: { $regex: new RegExp(searchText, 'i') } },
        { twitter: { $regex: new RegExp(searchText, 'i') } },
        { website: { $regex: new RegExp(searchText, 'i') } },
        { phone: { $regex: new RegExp(searchText, 'i') } },

        {
          $and: [
            { website: { $regex: new RegExp(splitedSearchText[0], 'i') } },
            { phone: { $regex: new RegExp(splitedSearchText[1], 'i') } },
          ],
        },
        {
          $and: [
            { website: { $regex: new RegExp(splitedSearchText[1], 'i') } },
            { phone: { $regex: new RegExp(splitedSearchText[0], 'i') } },
          ],
        },
        {
          $and: [
            { facebook: { $regex: new RegExp(splitedSearchText[0], 'i') } },
            { phone: { $regex: new RegExp(splitedSearchText[1], 'i') } },
          ],
        },

        {
          $and: [
            { facebook: { $regex: new RegExp(splitedSearchText[1], 'i') } },
            { phone: { $regex: new RegExp(splitedSearchText[0], 'i') } },
          ],
        },
      ],
    });

    console.log('Socialmedia found in mongo:\n', socialmedia);

    res.json(socialmedia);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route       GET api/socialmedia
//desc         Get all socialmedia
//access       Public
//
router.get('/', async (req, res) => {
  try {
    const socialmedia = await SocialMedia.find({});
    res.json(socialmedia);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// router.get('/', async (req, res) => {
//   try {

//     //http://server:5000/socialmedia?search=aa
//     let countForText = req.query.countForText;
//     console.log('Received countForText: ', countForText);

//     const count_media = await SocialMedia.where({
//       $or: [
//         { facebook: { $regex: new RegExp(countForText, "i") } },
//         { instagram: { $regex: new RegExp(countForText, "i") } },
//         { twitter: { $regex: new RegExp(countForText, "i") } },
//         { website: { $regex: new RegExp(countForText, "i") } },
//         { phone: { $regex: new RegExp(countForText, "i") } },
//       ],
//     }).count();

//     // const countQuery = model.where({ 'color': 'black' }).count();
//    // coll.find({paymentDate: {$gte: "2016-02-18", $lte: "2016-06-19"}});
//     console.log('Companies found in mongo: ', count_media);

//     res.json(count_media)

//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });
//@route       GET api/socialmedia/id
//desc         Get socialmedia by id
//access       Public

router.get('/:id', async (req, res) => {
  try {
    const socialmedia = await SocialMedia.findById(req.params.id);
    res.json(socialmedia);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
