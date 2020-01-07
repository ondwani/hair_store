const router = require("express").Router();
const User = require("../models/models");
const bcrypt = require("bcrypt");

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

module.exports = router;
