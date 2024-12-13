// import express from "express";
// const router = express.Router();
// import User from './models/User';

// // Register
// router.post('/register', async (req, res) => {
//   const { name, email, password, faculty, verifyCode } = req.body;

//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists) return res.status(400).json({ message: 'User already exists' });

//     const newUser = new User({ name, email, password, faculty, verifyCode });
//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// // Login
// router.post('/login', async (req, res) => {
//   const { email, password, verifyCode } = req.body;

//   try {
//     const user = await User.findOne({ email, password, verifyCode });
//     if (!user) return res.status(401).json({ message: 'Invalid credentials' });

//     res.status(200).json({ message: 'Login successful', user });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// // Verification Details
// router.get('/verify/:email', async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.params.email });
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     res.status(200).json({
//       name: user.name,
//       email: user.email,
//       faculty: user.faculty,
//       verifyCode: user.verifyCode,
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// module.exports = router;


import express from 'express';
const router = express.Router();

// Define routes here
router.post('/login', (req, res) => {
  res.send('Login route');
});

router.post('/register', (req, res) => {
  res.send('Register route');
});

export default router; // Use `export default` instead of `module.exports`
