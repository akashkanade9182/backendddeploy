const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const Usermodel = require("../Models/User.model")


const Authenticate = async (req, res, next) => {
     const { name, email, password } = req.body;
     const presentuser = await Usermodel.find({ email });

     if (presentuser.length > 0) {
          return res.status(422).send("Email id already exists")
     }

     bcrypt.hash(password, 4, async function (err, hash) {
          if (hash) {
               const user = new Usermodel({ name, email, password: hash })
               await user.save();

               next();
          }
          else {
               console.log(err)
               return res.status(422).send("error in password bcrypt");
          }


     });

}
module.exports = Authenticate;