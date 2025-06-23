import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";
// import Login from "../../src/pages/Login.jsx";


const generateToken = (email, role) => {
  return jwt.sign({ email, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let role = '';
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      role = 'Admin';
    } else if (email === process.env.VENDOR_EMAIL && password === process.env.VENDOR_PASSWORD) {
      role = 'Vendor';
    } else if (email === process.env.USER_EMAIL && password === process.env.USER_PASSWORD) {
      role = 'User';
    } else if (email === process.env.SUPERADMIN_EMAIL && password === process.env.SUPERADMIN_PASSWORD) {
      role = 'SuperAdmin';
    } else {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken(email, role);
    res.json({ success: true, token, role });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// module.exports = { Login };
export default {login};