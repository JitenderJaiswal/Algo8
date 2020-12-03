const bcrypt = require("bcryptjs");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

//Register User
module.exports.create = async function (req, res) {
  try {
    console.log(req.body);
    const { name, email, password, confirm_password } = req.body;
    const letters = /^[A-Za-z]+$/;
    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //Fields Validation
    if (!name.match(letters)) {
      return res.status(422).json({
        message: "Username must have alphabet characters only",
        success: false,
      });
    }
    if (!email.match(emailformat)) {
      return res.status(422).json({
        message: "You have entered an invalid email address!",
        success: false,
      });
    }
    if (password.length < 8) {
      return res.status(422).json({
        message: "Password should be atleast of 8 characters",
        success: false,
      });
    }
    if (password != confirm_password) {
      return res.status(422).json({
        message: "Password not match",
        success: false,
      });
    }
    //Find user by email
    let user = await User.findOne({ email: email });

    if (user) {
      return res.status(422).json({
        message: "user already in database",
        success: false,
      });
    }
    //Hash Password
    let salt = bcrypt.genSaltSync(10);
    let hashPassword = bcrypt.hashSync(password, salt);
    //User Create with Hash Password
    user = await User.create({
      email: email,
      password: hashPassword,
      name: name,
      type: type,
    });
    return res.status(200).json({
      message: "Sign Up successful, here is your token, please keep it safe!",
      success: true,
      data: {
        token: jwt.sign(user.toJSON(), "SecretKey", {
          expiresIn: "1000000",
        }),
        user: user,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: err, success: false });
  }
};

//Login(create session)
module.exports.create_session = async function (req, res) {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Username ",
      });
    }
    //Password is match
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    console.log("user", user);
    return res.status(200).json({
      message: "Sign in successful, here is your token, please keep it safe!",
      success: true,
      data: {
        token: jwt.sign(user.toJSON(), "SecretKey", {
          expiresIn: "1000000",
        }),
        user: user,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: err, success: false });
  }
};

//User Profile
module.exports.profile = async function (req, res) {
  try {
    return res.json(200, {
      message: "User Profile!",
      profile_user: req.user,
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
