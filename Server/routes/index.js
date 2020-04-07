var express = require('express');
var router = express.Router();
var {insertContactUs} = require('../js/database/database');
var {notifyUs} = require('../js/mailer')
// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');

const validateAndSanitate = [
  // username must be an email
  body('email').
  normalizeEmail().
  isEmail().withMessage('Email must be a valid email.'),
  // password must be at least 5 chars long
  body('subject').notEmpty().withMessage('Subject must have some content.').trim().escape(),
  body('name').notEmpty().withMessage('Name must be given.').trim().escape(),
];

async function contactUs(req,res){
  const {
    name='',
    email='',
    subject=''
  } = req.body
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  let response = await insertContactUs({name, email, subject})

  if(!response){res.status(400).json({errors: ['Could not save the question.']})}

  res.status(200).json({success:true, message:"Við munum fara yfir spurninguna þína og svara eins fljótt og auðið er. Takk fyrir."})

  //TODO: Put onto a worker node.
  notifyUs({name, email, subject})
}

function catchErrors(fn){
  return (req,res,next) => fn(req,res,next).catch(next);
}


router.post('/contact',validateAndSanitate, catchErrors(contactUs));


module.exports = router;
