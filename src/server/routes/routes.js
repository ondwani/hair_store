const router = require("express").Router();
const {User, Cart} = require("../models/models");
const bcrypt = require("bcrypt");
const sgMail = require('@sendgrid/mail');
require("dotenv").config();

router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  console.log(req.body);
  let errors;
  if (!name || !email || !password || !password2) {
    errors = "please enter all fields";
    res.send({ err: errors });
  } else if (password !== password2) {
    errors = "passwords do not match";
    res.send({ err: errors });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors = "The user already exist!";
        res.send({ err: errors });
      } else {
        const newUser = new User({ name, email, password });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(success => {
                res.send("user registered succesfully");
              })
              .catch(err => console.error(err));
          });
        });
      }
    });
  }
});

router.post("/contact", (req, res)=>{
  const {fname,lname, email, phoneNumber, text}=req.body;
 console.log(req.body)
sgMail.setApiKey(process.env.SG_KEY);
const msg = {
  to: 'daiziepink@gmail.com',
  from: 'mail@deeshairstore.com',
  subject: 'INQUIRY',
  html: `<strong>Name: ${fname} ${lname} <br/>
  Email: ${email} <br/> Phone Number: ${phoneNumber} <br/> Message:${text}</strong>`,
};
sgMail.send(msg);
})


router.post("/addcart", async(req,res)=>{
  console.log(req.body)
const newItem = new Cart(req.body);
await newItem.save();
})
module.exports = router;
