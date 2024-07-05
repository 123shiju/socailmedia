const User = require("../Models/UserModal.js");

const register = async (req, res) => {
  try {
    const { username, email, password, phonenumber } = req.body;
    let user = await User.findOne({ email });
    user = new User({ username, email, password, phonenumber });

    await user.save();

    res.status(200).json({ message: "User registered successfully" });
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const loginPage = async (req, res) => {
  try {
    const { username, password } = re.body;
    const user = User.find({ username });
    if (user) {
      user.password === password;
      res.status(200).json({ message: "Login successfull" });
    }
  } catch (error) {}
};

module.exports = {
  register,
  loginPage,
};
